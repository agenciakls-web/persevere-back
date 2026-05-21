import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class FindEventosRecentsControlller {
    async handle(request: Request, response: Response) {
        const dateNow = new Date();

        const eventos = await prismaClient.eventos.findMany({
            take: 8,
            orderBy: [{ created_at: 'asc' }],
            include: {
                congregacao: true
            },
            where: {
                date: {
                    gt: dateNow // "gt" significa "greater than" (maior que)
                },
                status: true
            }
        });

        return response.json(eventos);
    }
}
