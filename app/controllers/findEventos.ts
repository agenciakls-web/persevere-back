import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class FindEventosControlller {
    async handle(request: Request, response: Response) {

        const eventos = await prismaClient.eventos.findMany({
            orderBy: {
                date: 'asc'
            },
            include: {
                congregacao: true
            },
            where: {
                status: true
            }
        });

        return response.json(eventos);
    }
}
