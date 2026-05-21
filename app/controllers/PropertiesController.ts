import { Request, Response } from "express";
import prismaClient from "./prismaClient";
import axios from "axios";
import fs from "fs";
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

            const listaImoveis = parsed?.Imoveis?.Imovel ?? [];

            // Normaliza para array
            const imoveisArray = Array.isArray(listaImoveis)
                ? listaImoveis
                : [listaImoveis];

            // Remove imóveis que não estão mais no XML
            const codigosAtuais = imoveisArray.map(
                (imovel: any) => imovel.CodigoImovel
            );

            await prismaClient.property.deleteMany({
                where: {
                    CodigoImovel: { notIn: codigosAtuais },
                },
            });

            let countProperty = 0;

            for (const singleImovel of imoveisArray) {
                const arrayImovel = {
                    CodigoImovel: singleImovel.CodigoImovel || "",
                    TipoImovel: singleImovel.TipoImovel || "",
                    SubTipoImovel: singleImovel.SubTipoImovel || "",
                    CategoriaImovel: singleImovel.CategoriaImovel || "",
                    Cidade: singleImovel.Cidade || "",
                    Bairro: singleImovel.Bairro || "",
                    Endereco: singleImovel.Endereco || "",
                    CEP: singleImovel.CEP || "",
                    PrecoVenda: parseFloat(singleImovel.PrecoVenda || 0),
                    PrecoLocacao: parseFloat(singleImovel.PrecoLocacao || 0),
                    PrecoLocacaoTemporada: parseFloat(
                        singleImovel.PrecoLocacaoTemporada || 0
                    ),
                    AreaUtil: parseFloat(singleImovel.AreaUtil || 0),
                    AreaTotal: parseFloat(singleImovel.AreaTotal || 0),
                    QtdDormitorios: parseInt(singleImovel.QtdDormitorios || 0),
                    QtdSuites: parseInt(singleImovel.QtdSuites || 0),
                    QtdBanheiros: parseInt(singleImovel.QtdBanheiros || 0),
                    QtdSalas: parseInt(singleImovel.QtdSalas || 0),
                    QtdVagas: parseInt(singleImovel.QtdVagas || 0),
                    Observacao: singleImovel.Observacao || "",
                    PrecoCondominio: parseInt(singleImovel.PrecoCondominio || 0),
                    NomeCondominio: singleImovel.NomeCondominio || "",
                };

                // Busca imóvel existente
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

                // Atualização incremental das fotos
                const fotos = singleImovel.Fotos?.Foto ?? [];
                const fotosArray = Array.isArray(fotos) ? fotos : [fotos];

                const currentPhotos = await prismaClient.photo.findMany({
                    where: { property_id: property.id },
                });

                const currentPhotosMap: Record<string, any> = {};
                currentPhotos.forEach((p) => {
                    if (p.URLArquivo) { currentPhotosMap[p.URLArquivo] = p; }
                });

                let order = 0;
                for (const singleFoto of fotosArray) {
                    const urlFoto = singleFoto.URLArquivo || "";
                    const principal = parseInt(singleFoto.Principal || 0);

                    if (currentPhotosMap[urlFoto]) {
                        await prismaClient.photo.update({
                            where: { id: currentPhotosMap[urlFoto].id },
                            data: {
                                Principal: principal,
                            },
                        });
                        delete currentPhotosMap[urlFoto];
                    } else {
                        // Nova foto
                        await prismaClient.photo.create({
                            data: {
                                URLArquivo: urlFoto,
                                Principal: principal,
                                property_id: property.id,
                            },
                        });
                    }
                    order++;
                }

                // Remove fotos que não estão mais no XML
                for (const photo of Object.values(currentPhotosMap)) {
                    await prismaClient.photo.delete({ where: { id: photo.id } });
                }
            }

            return response.json({
                countProperty,
                message: "Importação concluída",
            });
        } catch (error: any) {
            return response.status(500).json({ error: error.message });
        }
    }
}

export default GetImoveisController;