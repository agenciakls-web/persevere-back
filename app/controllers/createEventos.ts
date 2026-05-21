import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class CreateEventosController {
    async handle(request: Request, response: Response) {

        const responseContent = {
            status: false,
            message: "Houve um erro ao tentar enviar os dados.",
            data: {},
            resend: {}
        };
        const { name, email, phone } = request.body;

        if (!name || name == "") { responseContent.message = "Preencha o campo name"; }
        else {
            try {
                const eventoPrisma = await prismaClient.eventos.create({
                    data: {
                        name,
                    },
                });
                responseContent.status = true;
                responseContent.message = "Recebemos seu evento com sucesso";
                responseContent.data = eventoPrisma;
                return response.json(responseContent);
            }
            catch (erro: any) {
                if (erro.code === 'P2002') { responseContent.message = "Você já está cadastrado em nosso sistema!"; }
            }
        }
        return response.json(responseContent);
    }
}
