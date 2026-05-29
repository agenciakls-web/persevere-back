import { Request, Response } from "express";
import prismaClient from "./prismaClient";
import axios from "axios";
import xml2js from "xml2js";

export class GetImoveisController {
    async handle(request: Request, response: Response) {
        try {
            const url =
                "https://portais.infoideias.net/Midas/portais/002061/sitepp/5be54fc9eb29b08/siteproprio.xml";

            // Baixa XML via axios
            const { data } = await axios.get(url, { timeout: 15000 });

            // Converte XML para objeto JS direto em memória
            const parser = new xml2js.Parser({ explicitArray: false });
            const parsed = await parser.parseStringPromise(data);

            const listaImoveis = parsed?.Carga?.Imoveis?.Imovel ?? [];

            // Normaliza para array
            const imoveisArray = Array.isArray(listaImoveis)
                ? listaImoveis
                : [listaImoveis];

            // Remove imóveis que não estão mais no XML
            const codigosAtuais = imoveisArray.map(
                (imovel: any) => imovel.CodigoImovel
            ).filter(Boolean);

            if (codigosAtuais.length > 0) {
                await prismaClient.property.deleteMany({
                    where: {
                        CodigoImovel: { notIn: codigosAtuais },
                    },
                });
            }

            let countProperty = 0;

            // Função auxiliar para tratar as características booleanas (0 ou 1) vindas do XML
            const parseIntFlag = (value: any): number => {
                if (!value) return 0;
                const parsedValue = parseInt(value);
                return isNaN(parsedValue) ? 0 : parsedValue;
            };

            for (const singleImovel of imoveisArray) {
                // Pula o registro caso não possua o código do imóvel
                if (!singleImovel.CodigoImovel) continue;

                const arrayImovel = {
                    CodigoCliente: singleImovel.CodigoCliente || "",
                    CodigoImovel: singleImovel.CodigoImovel,
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
                    
                    // Quantidades e Datas
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
                    TipoOffer: singleImovel.TipoOferta || "N",

                    // Características / Flags (0 ou 1) sincronizadas com o XML
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
                    NomeCondominio: singleImovel.NomeCondominio || "",
                };

                // Busca imóvel existente para Upsert manual
                let property = await prismaClient.property.findUnique({
                    where: { CodigoImovel: arrayImovel.CodigoImovel },
                });

                if (property) {
                    property = await prismaClient.property.update({
                        where: { CodigoImovel: arrayImovel.CodigoImovel },
                        data: arrayImovel,
                    });
                } else {
                    property = await prismaClient.property.create({
                        data: arrayImovel,
                    });
                }

                countProperty++;

                // Sincronização Incremental das Fotos
                const fotos = singleImovel.Fotos?.Foto ?? [];
                const fotosArray = Array.isArray(fotos) ? fotos : [fotos];

                const currentPhotos = await prismaClient.photo.findMany({
                    where: { property_id: property.id },
                });

                const currentPhotosMap: Record<string, any> = {};
                currentPhotos.forEach((p) => {
                    if (p.URLArquivo) { currentPhotosMap[p.URLArquivo] = p; }
                });

                for (const singleFoto of fotosArray) {
                    const urlFoto = singleFoto.URLArquivo || "";
                    if (!urlFoto) continue;

                    const principal = parseIntFlag(singleFoto.Principal);
                    const alterada = parseIntFlag(singleFoto.Alterada);

                    if (currentPhotosMap[urlFoto]) {
                        // Foto já existe, atualiza metadados se mudaram
                        await prismaClient.photo.update({
                            where: { id: currentPhotosMap[urlFoto].id },
                            data: {
                                Principal: principal,
                                Alterada: alterada,
                            },
                        });
                        delete currentPhotosMap[urlFoto];
                    } else {
                        // Nova foto inserida no banco
                        await prismaClient.photo.create({
                            data: {
                                URLArquivo: urlFoto,
                                Principal: principal,
                                Alterada: alterada,
                                property_id: property.id,
                            },
                        });
                    }
                }

                // Remove fotos órfãs que sumiram do XML atualizado
                for (const photo of Object.values(currentPhotosMap)) {
                    await prismaClient.photo.delete({ where: { id: photo.id } });
                }
            }

            return response.json({
                countProperty,
                message: "Importação concluída com sucesso.",
            });
        } catch (error: any) {
            return response.status(500).json({ error: error.message });
        }
    }
}

export default GetImoveisController;