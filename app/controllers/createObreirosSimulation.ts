import { Request, Response } from "express";
import prismaClient from "./prismaClient";

const obreirosData = [
    { name: 'Alex Luiz Mirandela ', phone: '(21) 99232-3546', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Paulo César Dutra ', phone: '(21) 98628-2571', cargo: 'Pastor', position: 2, dirigente: true },
    { name: 'Cláudio Gomes Pereira ', phone: ' (21) 98532-9276', cargo: 'Pastor', position: 3, dirigente: true },
    { name: 'Cláudio Gomes Pereira ', phone: ' (21) 98532-9276', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Luiz Carlos Pessanha Barreto ', phone: '(21) 97008-0248', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Valcir Pereira Moraes Cazimiro ', phone: ' (21) 97408-4758', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Daniel Antônio da Silva ', phone: ' (21) 99958-6434', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Orlando da Silva Santiago ', phone: '(21) 98173-4157', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Ivo da Silva ', phone: ' () -', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Luiz Otávio Teixeira de Souza ', phone: ' (21) 99109-1133', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Moysés Carlos Ventura ', phone: '(21) 97100-8829', cargo: 'Evangelista', position: 2, dirigente: true },
    { name: 'Manoel José da Silva ', phone: ' (21) 98064-0853', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Mário Carlos dos Santos Neto ', phone: ' (21) 99936-6344', cargo: 'Presbítero', position: 1, dirigente: true },
    { name: 'Josimar Souza Alves ', phone: '(21) 99889-6223', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Fábio Mendes dos Santos ', phone: ' () -', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Daniel Soares Silva ', phone: ' (21) 96575-2093', cargo: 'Presbítero', position: 1, dirigente: true },
    { name: 'Ismael Elias Guimarães Filho ', phone: '(21) 99378-1675', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Adílio Souza de Jesus ', phone: ' (21) 97236-6549', cargo: 'Evangelista', position: 1, dirigente: true },
    { name: 'Marcos Antônio dos Santos ', phone: '(21) 99951-3448', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Jedielson Alves da Silva Vianna ', phone: ' (21) 99124-1436', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Daniel Cardoso Dutra ', phone: ' (21) 98649-2843', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Aleandro de Holanda do Nascimento ', phone: '(21) 96462-4158', cargo: 'Evangelista', position: 2, dirigente: true },
    { name: 'Alfredo Sabino Porto Filho ', phone: ' () -', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Sérgio de Freitas Melo ', phone: ' (21) 98015-3896', cargo: 'Presbítero', position: 1, dirigente: true },
    { name: 'Lenilton Guedes do Nascimento ', phone: '(21) 97512-2645', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Roberto dos Santos ', phone: ' (22) 97404-6293', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Oziel dos Santos Dantas ', phone: ' (21) 99887-4938', cargo: 'Evangelista', position: 1, dirigente: true },
    { name: 'Jairo Corrêa ', phone: '(21) 99868-6125', cargo: 'Evangelista', position: 2, dirigente: true },
    { name: 'Elias de Jesus ', phone: ' (21) 98882-3657', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Andre da Silva Medeiros ', phone: ' (21) 99128-7112', cargo: 'Presbítero', position: 1, dirigente: true },
    { name: 'Osvaldo Brito ', phone: '(21) 97430-3303', cargo: 'Pastor', position: 2, dirigente: true },
    { name: 'Manoel Maximiano Flores ', phone: ' (21) 99131-0019', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Bruno Matias Goulart ', phone: ' () -', cargo: 'Presbítero', position: 1, dirigente: true },
    { name: 'José Carlos Zacarias ', phone: '(21) 98905-4066', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Hédio Pereira ', phone: ' (21) 98650-3699', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Jeferson Gomes da Silva ', phone: ' (21) 99035-5134', cargo: 'Presbítero', position: 1, dirigente: true },
    { name: 'Ronivon Pereira da Silva ', phone: '(21) 96869-9579', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Luiz Otávio Teixeira de Souza ', phone: ' (21) 99109-1133', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Salvador Sodré das Dores ', phone: ' -', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Celso da Conceição Berte ', phone: ' (21) 98819-4506', cargo: 'Diácono', position: 3, dirigente: true },
    { name: 'Alex Luiz Mirandela ', phone: ' (21) 99232-3546', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Hélio Basílio dos Santos ', phone: '(21) 99498-1954', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Maurício Ferreira Gameleira ', phone: ' (21) 97448-3282', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Joseilton Alves Lima ', phone: ' (79) 99955-9216', cargo: 'Presbítero', position: 1, dirigente: true },
    { name: 'Adriano Valentim dos Santos ', phone: ' -', cargo: 'Diácono', position: 2, dirigente: true },
    { name: 'Valmir Bastista da Fraga ', phone: ' (79) 99905-4134', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Lailson José Santos ', phone: ' -', cargo: 'Diácono', position: 2, dirigente: true },
    { name: 'Odinei da Silva Motta ', phone: ' (67) 99684-6802', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Edilson Vargas Ortega ', phone: '(67) 98103-5506', cargo: 'Diácono', position: 2, dirigente: true },
    { name: 'Nivaldo Alves Netto ', phone: ' (21) 97359-3084', cargo: 'Evangelista', position: 1, dirigente: true },
    { name: 'Félix Vicente da Silva Sobrinho ', phone: '(21) 96917-1258', cargo: 'Presbítero', position: 2, dirigente: true },
    { name: 'Antonio José da Silva Filho ', phone: ' (21) 99657-7379', cargo: 'Presbítero', position: 3, dirigente: true },
    { name: 'Lailson José Santos ', phone: ' () -', cargo: 'Diácono', position: 1, dirigente: true },
    { name: 'Gildeon de Jesus Santana ', phone: ' -', cargo: 'Diácono', position: 2, dirigente: true },
    { name: 'Odinei da Silva Motta ', phone: ' (67) 99684-6802', cargo: 'Pastor', position: 1, dirigente: true },
    { name: 'Edilson Vargas Ortega ', phone: '(67) 98103-5506', cargo: 'Diácono', position: 2, dirigente: true },
    { name: 'José Humberto Melo Filho ', phone: ' (79) 99156-2479', cargo: 'Presbítero', position: 1, dirigente: true },
];

export class CreateObreirosController {
    async handle(request: Request, response: Response) {

        const responseDados = {
            status: false,
            message: "Houve um erro ao tentar enviar os dados.",
            data: {},
            resend: {}
        };
        try {

            const obreiros = await prismaClient.obreiros.createMany({
                data: obreirosData,
            });
            responseDados.status = true;
            responseDados.message = "Dados salvos com sucessso";
            responseDados.data = obreiros;
            return response.json(responseDados);
        }
        catch (erro: any) {
            responseDados.message = erro.message;
        }
        response.json(responseDados)
    }
}
