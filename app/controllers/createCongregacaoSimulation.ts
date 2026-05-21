import { Request, Response } from "express";
import prismaClient from "./prismaClient";

const congregacaoData = [
   
    {
        name: 'Valdariosa',
        address: 'Avenida Beira Rio, 779 - Valdariosa - Queimados',
        inauguration: new Date('1970-04-20'),
    },
    {
        name: 'Jardim Alzira',
        address: 'Rua Licío Cardoso, 65 - Jardim Alzira - Queimados',
        inauguration: new Date('1973-04-21'),
    },
    {
        name: 'Fanchem',
        address: 'Avenida Carmarim, 125 - Fanchem - Queimados',
        inauguration: new Date('1976-01-15'),
    },
    {
        name: 'Vila Coimbra',
        address: 'Rua Coaracy,  76 - Vila Coimbra - Queimados',
        inauguration: new Date('1992-12-25'),
    },
    {
        name: 'Austin',
        address: 'Estrada Austin, 910 - Austin - Nova Iguaçu',
        inauguration: new Date('1994-04-01'),
    },
    {
        name: 'Paracambi',
        address: 'Rua Beraldo Sacche, 733 - Sabugo - Paracambi',
        inauguration: new Date('1995-04-14'),
    },
    {
        name: 'Cacúia',
        address: 'Estrada da Pedreira, 17 - Cacuia - Nova Iguaçu',
        inauguration: new Date('1979-09-07'),
    },
    {
        name: 'Jardim Silvestre',
        address: 'Rua Rodrigues Quadra D Lote 13 - São Miguel - Queimados',
        inauguration: new Date('1986-03-28'),
    },
    {
        name: 'Cantão',
        address: 'Rua Carlos Lote 33 - N. Sra da Conceição - Queimados',
        inauguration: new Date('2000-03-11'),
    },
    {
        name: 'Lages',
        address: 'Rua do Acre, 106 - Lages - Paracambi',
        inauguration: new Date('1997-12-14'),
    },
    {
        name: 'Jardim do Trevo',
        address: 'Rua Emanoel Dias Quadra 05 Lote 05 - Jardim do Trevo - Queimados',
        inauguration: new Date('2000-11-22'),
    },
    {
        name: 'Km 09',
        address: 'Estrada Eduardo Pereira Dias, 10017 - Km 09 - Paracambi',
        inauguration: new Date('2002-07-20'),
    },
    {
        name: 'Cabuçu',
        address: 'Rua Inhoaíba, 15 - Jardim Cabuçu - Nova Iguaçu',
        inauguration: new Date('2012-07-12'),
    },
    {
        name: 'Jardim Queimados',
        address: 'Rua Promotor Plácio, 109 - Jardim Queimados - Queimados',
        inauguration: new Date('2012-07-12'),
    },
    {
        name: 'Aracaju - SE',
        address: 'Rua João Tomaz Reis Ramos, 193 - Povoado São Raimundo - Aracaju',
        inauguration: new Date('2008-03-15'),
    },
    {
        name: 'Novo Paraíso - SE',
        address: 'Povoado Novo Paraíso Colônia Treze - Lagarto - Aracaju',
        inauguration: new Date('2013-03-13'),
    },
    {
        name: 'Guanã - MS',
        address: 'Rua José Marciel de Barros Bloco 8 casa 2 - Guanã - Corumbá',
        inauguration: new Date('2014-11-02'),
    },
    {
        name: 'Lago dos Peixes',
        address: 'Rua Sogerim, 168 - Lago dos Peixe - Nova Iguaçu',
        inauguration: new Date('2018-06-16'),
    },
    {
        name: 'Poção(Aracaju) - SE',
        address: 'Sem Endereço',
    },
    {
        name: 'Maria Coelho(Guanã) - MS',
        address: 'Sem Endereço',
    },
    {
        name: 'Santos Dumont(Aracajú) - SE',
        address: 'Rua Jaime Paulo, 52 - Santos Dumont - Aracaju',
        inauguration: new Date('2022-10-15'),
    },
];

export class CreateCongregacaoController {
    async handle(request: Request, response: Response) {

        const responseDados = {
            status: false,
            message: "Houve um erro ao tentar enviar os dados.",
            data: {},
            resend: {}
        };
        try {

            const congregacoes = await prismaClient.congregacao.createMany({
                data: congregacaoData,
            });
            responseDados.status = true;
            responseDados.message = "Dados salvos com sucessso";
            responseDados.data = congregacoes;
            return response.json(responseDados);
        }
        catch (erro: any) {
            responseDados.message = erro.message;
        }
        response.json(responseDados)
    }
}
