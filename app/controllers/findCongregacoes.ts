import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class FindCongregacoesController {
    async handle(request: Request, response: Response) {

        const congregacoes = await prismaClient.congregacao.findMany({
            include: {
                Obreiros: {
                    include: {
                        Obreiros: true
                    }
                }
            }, 
            where: {
                status: true
            }
        });

        return response.json(congregacoes);
    }
}
