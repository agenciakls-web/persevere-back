import { Request, Response } from "express";
import prismaClient from "./prismaClient";
import axios from "axios";
import xml2js from "xml2js";

export class GetImoveisController {
    async handle(request: Request, response: Response) {
        try {
            const url = "https://portais.infoideias.net/Midas/portais/002061/sitepp/5be54fc9eb29b08/siteproprio.xml";

            // 1. Baixa o XML em memória
            const { data } = await axios.get(url, { timeout: 15000 });
            const parser = new xml2js.Parser({ explicitArray: false });
            const parsed = await parser.parseStringPromise(data);
            const listaImoveis = parsed?.Carga?.Imoveis?.Imovel ?? [];
            const imoveisArray = Array.isArray(listaImoveis) ? listaImoveis : [listaImoveis];

            // 2. Mapeia todos os códigos válidos do XML para a memória
            const codigosAtuaisDoXml = imoveisArray
                .map((imovel: any) => imovel.CodigoImovel ? String(imovel.CodigoImovel).trim() : null)
                .filter(Boolean) as string[];

            // 3. LIMPEZA DOS IMÓVEIS: Remove de uma vez só quem saiu do XML
            if (codigosAtuaisDoXml.length > 0) {
                await prismaClient.property.deleteMany({
                    where: {
                        CodigoImovel: { notIn: codigosAtuaisDoXml },
                    },
                });
            }

            let countProperty = 0;
            const parseIntFlag = (value: any): number => {
                if (!value) return 0;
                const parsedValue = parseInt(value);
                return isNaN(parsedValue) ? 0 : parsedValue;
            };

            // 4. PROCESSAMENTO DOS IMÓVEIS ATUAIS
            for (const singleImovel of imoveisArray) {
                if (!singleImovel.CodigoImovel) continue;
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

                // UPSERT DO IMÓVEL: Atualiza se já existir, cria se for novo
                const property = await prismaClient.property.upsert({
                    where: { CodigoImovel: codigo },
                    update: dadosImovel,
                    create: { ...dadosImovel, CodigoImovel: codigo }
                });

                countProperty++;

                // SINCRONIZAÇÃO DAS FOTOS:
                // Prepara o array de fotos vindas do XML para este imóvel
                const fotos = singleImovel.Fotos?.Foto ?? [];
                const fotosArray = Array.isArray(fotos) ? fotos : [fotos];

                const fotosParaInserir = fotosArray.map((singleFoto: any) => {
                    const urlFoto = singleFoto.URLArquivo || "";
                    if (!urlFoto) return null;
                    return {
                        URLArquivo: urlFoto,
                        Principal: parseIntFlag(singleFoto.Principal),
                        Alterada: parseIntFlag(singleFoto.Alterada),
                        property_id: property.id
                    };
                }).filter(Boolean) as any[];

                // Executa a sincronização de fotos em lote para este imóvel
                await prismaClient.$transaction([
                    // Remove TODAS as antigas deste imóvel (se tinha 5, limpa as 5)
                    prismaClient.photo.deleteMany({ where: { property_id: property.id } }),
                    // Insere as novas tratadas (se agora tem 3, insere as 3 atualizadas)
                    prismaClient.photo.createMany({ data: fotosParaInserir })
                ]);
            }

            return response.json({
                countProperty,
                message: "Sincronização inteligente concluída com sucesso.",
            });

        } catch (error: any) {
            console.error(error);
            return response.status(500).json({ error: error.message });
        }
    }
}
export default GetImoveisController;