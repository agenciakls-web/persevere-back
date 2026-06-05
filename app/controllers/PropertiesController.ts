import { Request, Response } from "express";
import prismaClient from "./prismaClient";
import axios from "axios";
import xml2js from "xml2js";

export class GetImoveisController {
    async handle(request: Request, response: Response) {
        try {
            const url = "https://portais.infoideias.net/Midas/portais/002061/sitepp/5be54fc9eb29b08/siteproprio.xml";

            // 1. Baixa o XML em alta velocidade
            const { data } = await axios.get(url, { timeout: 15000 });
            const parser = new xml2js.Parser({ explicitArray: false });
            const parsed = await parser.parseStringPromise(data);
            const listaImoveis = parsed?.Carga?.Imoveis?.Imovel ?? [];
            const imoveisArray = Array.isArray(listaImoveis) ? listaImoveis : [listaImoveis];

            // 2. Mapeia códigos do XML e limpa duplicados no próprio ficheiro
            const codigosAtuaisXml = new Set<string>();
            const imoveisFiltrados: any[] = [];

            for (const item of imoveisArray) {
                if (item.CodigoImovel) {
                    const cod = String(item.CodigoImovel).trim();
                    if (!codigosAtuaisXml.has(cod)) {
                        codigosAtuaisXml.add(cod);
                        imoveisFiltrados.push(item);
                    }
                }
            }

            const arrCodigosXml = Array.from(codigosAtuaisXml);

            // 3. Puxa dados do banco para comparação em memória (Traz IDs e Códigos)
            const imoveisNoBanco = await prismaClient.property.findMany({
                select: { id: true, CodigoImovel: true }
            });

            const mapaBanco = new Map<string, number>();
            imoveisNoBanco.forEach(i => mapaBanco.set(i.CodigoImovel, i.id));

            // Relatório para o front-end
            const criados: string[] = [];
            const atualizados: string[] = [];
            const deletados: string[] = [];

            // 4. OPERAÇÃO ATÔMICA AUTOMATIZADA EM LARGA ESCALA
            await prismaClient.$transaction(async (tx) => {
                
                // PASSO A: Remove quem saiu do XML de uma só vez (Garante a limpeza rápida)
                const codigosParaDeletar = imoveisNoBanco
                    .map(i => i.CodigoImovel)
                    .filter(cod => !codigosAtuaisXml.has(cod));
                
                if (codigosParaDeletar.length > 0) {
                    deletados.push(...codigosParaDeletar);
                    // O Prisma apaga as fotos automaticamente se houver Cascade, 
                    // se não, limpamos as fotos deles primeiro:
                    await tx.photo.deleteMany({
                        where: { property: { CodigoImovel: { in: codigosParaDeletar } } }
                    });
                    await tx.property.deleteMany({
                        where: { CodigoImovel: { in: codigosParaDeletar } }
                    });
                }

                const parseIntFlag = (value: any): number => {
                    if (!value) return 0;
                    const parsedValue = parseInt(value);
                    return isNaN(parsedValue) ? 0 : parsedValue;
                };

                // Guardará os IDs dos imóveis que vamos atualizar as fotos
                const idsParaLimparFotos: number[] = [];
                const todasAsFotosParaInserir: any[] = [];

                // PASSO B: Executa os Upserts de forma linear otimizada
                for (const singleImovel of imoveisFiltrados) {
                    const codigo = String(singleImovel.CodigoImovel).trim();
                    
                    const dadosImovel = {
                        CodigoCliente: singleImovel.CodigoCliente || "",
                        TipoImovel: singleImovel.TipoImovel || "",
                        SubTipoImovel: singleImovel.SubTipoImovel || "",
                        CategoriaImovel: singleImovel.CategoriaImovel || "",
                        Cidade: singleImovel.Cidade || "",
                        Bairro: singleImovel.Bairro || "",
                        CEP: singleImovel.CEP || "",
                        PrecoVenda: parseFloat(singleImovel.PrecoVenda || 0),
                        PrecoLocacao: parseFloat(singleImovel.PrecoLocacao || 0),
                        PrecoLocacaoTemporada: parseFloat(singleImovel.PrecoLocacaoTemporada || 0),
                        PrecoCondominio: parseFloat(singleImovel.PrecoCondominio || 0),
                        AreaUtil: parseFloat(singleImovel.AreaUtil || 0),
                        AreaTotal: parseFloat(singleImovel.AreaTotal || 0),
                        QtdDormitorios: parseInt(singleImovel.QtdDormitorios || 0),
                        QtdSuites: parseInt(singleImovel.QtdSuites || 0),
                        QtdBanheiros: parseInt(singleImovel.QtdBanheiros || 0),
                        QtdSalas: parseInt(singleImovel.QtdSalas || 0),
                        QtdVagas: parseInt(singleImovel.QtdVagas || 0),
                        QtdElevador: parseInt(singleImovel.QtdElevador || 0),
                        QtdUnidadesAndar: parseInt(singleImovel.QtdUnidadesAndar || 0),
                        QtdAndar: parseInt(singleImovel.QtdAndar || 0),
                        AnoConstrucao: singleImovel.AnoConstrucao ? parseInt(singleImovel.AnoConstrucao) : null,
                        Observacao: singleImovel.Observacao || "",
                        titulo: singleImovel.titulo || "",
                        TipoOferta: singleImovel.TipoOferta || "N",
                        AceitaPermuta: parseIntFlag(singleImovel.AceitaPermuta),
                        ArCondicionado: parseIntFlag(singleImovel.ArCondicionado),
                        Cerca: parseIntFlag(singleImovel.Cerca),
                        Churrasqueira: parseIntFlag(singleImovel.Churrasqueira),
                        Esgoto: parseIntFlag(singleImovel.Esgoto),
                        EstacionamentoRotativo: parseIntFlag(singleImovel.EstacionamentoRotativo),
                        EstacionamentoVisitantes: parseIntFlag(singleImovel.EstacionamentoVisitantes),
                        Heliponto: parseIntFlag(singleImovel.Heliponto),
                        InfraInternet: parseIntFlag(singleImovel.InfraInternet),
                        Jardim: parseIntFlag(singleImovel.Jardim),
                        Lago: parseIntFlag(singleImovel.Lago),
                        Lavoura: parseIntFlag(singleImovel.Lavoura),
                        Pasto: parseIntFlag(singleImovel.Pasto),
                        Piscina: parseIntFlag(singleImovel.Piscina),
                        Playground: parseIntFlag(singleImovel.Playground),
                        QuadraTenis: parseIntFlag(singleImovel.QuadraTenis),
                        QuadraPoliEsportiva: parseIntFlag(singleImovel.QuadraPoliEsportiva),
                        RuaAsfaltada: parseIntFlag(singleImovel.RuaAsfaltada),
                        SalaGinastica: parseIntFlag(singleImovel.SalaGinastica),
                        SalaoFestas: parseIntFlag(singleImovel.SalaoFestas),
                        SalaoJogos: parseIntFlag(singleImovel.SalaoJogos),
                        Sauna: parseIntFlag(singleImovel.Sauna),
                        Silos: parseIntFlag(singleImovel.Silos),
                        Telefone: parseIntFlag(singleImovel.Telefone),
                        TVCabo: parseIntFlag(singleImovel.TVCabo),
                        Varanda: parseIntFlag(singleImovel.Varanda),
                        CasaCaseiro: parseIntFlag(singleImovel.CasaCaseiro),
                        EnergiaEletrica: parseIntFlag(singleImovel.EnergiaEletrica),
                        Interfone: parseIntFlag(singleImovel.Interfone),
                        PocoArtesiano: parseIntFlag(singleImovel.PocoArtesiano),
                        Paiol: parseIntFlag(singleImovel.Paiol),
                        ProntoMorar: parseIntFlag(singleImovel.ProntoMorar),
                        Curral: parseIntFlag(singleImovel.Curral),
                        UtilizeFGTS: parseIntFlag(singleImovel.UtilizeFGTS),
                        Terraco: parseIntFlag(singleImovel.Terraco),
                        Lavabo: parseIntFlag(singleImovel.Lavabo),
                        campodefutebol: parseIntFlag(singleImovel.campodefutebol),
                        NomeCondominio: singleImovel.NomeCondominio || ""
                    };

                    // Executa o Upsert
                    const property = await tx.property.upsert({
                        where: { CodigoImovel: codigo },
                        update: dadosImovel,
                        create: { ...dadosImovel, CodigoImovel: codigo }
                    });

                    if (mapaBanco.has(codigo)) {
                        atualizados.push(codigo);
                    } else {
                        criados.push(codigo);
                    }

                    // Guardamos o ID para limpar as fotos antigas deste imóvel em lote mais à frente
                    idsParaLimparFotos.push(property.id);

                    // Mapeia as fotos para uma lista global na memória
                    const fotos = singleImovel.Fotos?.Foto ?? [];
                    const fotosArray = Array.isArray(fotos) ? fotos : [fotos];

                    fotosArray.forEach((singleFoto: any) => {
                        const urlFoto = singleFoto.URLArquivo || "";
                        if (urlFoto) {
                            todasAsFotosParaInserir.push({
                                URLArquivo: urlFoto,
                                Principal: parseIntFlag(singleFoto.Principal),
                                Alterada: parseIntFlag(singleFoto.Alterada),
                                property_id: property.id
                            });
                        }
                    });
                }

                // PASSO C: Sincronização Massiva de Fotos (Reduz o tempo de execução para frações de segundo)
                if (idsParaLimparFotos.length > 0) {
                    // Apaga todas as fotos dos imóveis processados de uma só vez
                    await tx.photo.deleteMany({
                        where: { property_id: { in: idsParaLimparFotos } }
                    });
                }

                if (todasAsFotosParaInserir.length > 0) {
                    // Insere TODAS as fotos de TODOS os imóveis com um único comando bulk insert
                    await tx.photo.createMany({
                        data: todasAsFotosParaInserir,
                        skipDuplicates: true
                    });
                }

            }, {
                timeout: 59000 // Aumenta o tempo limite interno da transação para evitar quebras
            });

            return response.json({
                success: true,
                summary: {
                    totalProcessados: imoveisFiltrados.length,
                    totalCriados: criados.length,
                    totalAtualizados: atualizados.length,
                    totalDeletados: deletados.length
                },
                detalhes: { criados, atualizados, deletados }
            });

        } catch (error: any) {
            console.error("Erro na sincronização:", error);
            return response.status(500).json({ error: error.message });
        }
    }
}
export default GetImoveisController;