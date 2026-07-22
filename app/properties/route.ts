import { Request, Response, Router } from 'express'
import prismaClient from '../controllers/prismaClient';

const properties = Router()

properties.get('/', async (req: Request, res: Response) => {
    try {
        const {
            page,
            pesquisa,
            TipoImovel,
            PrecoVenda, // Pode vir na requisição representando o filtro de valor
            quartos,
            condominio,
            CodigoImovel,
            estilo,
            action,
            orderBy,         
            orderDirection,
            Cidade
        } = req.query;

        const currentAction = (action as string) || 'comprar';

        // 1. Configuração da Paginação
        const itemsPerPage = 9; 
        const currentPage = Math.max(1, parseInt(page as string) || 1);
        const skip = (currentPage - 1) * itemsPerPage;

        // 2. Construindo o objeto de filtros (where)
        const whereClause: any = {};

        // Regra Dinâmica conforme o tipo de Ação (alugar vs comprar vs codigo)
        if (currentAction === 'alugar') {
            whereClause.PrecoLocacao = { gt: 0 };
        } else if (currentAction === 'comprar') {
            whereClause.PrecoVenda = { gt: 0 };
        } else if (currentAction === 'codigo') {
            // Se for busca por código, traz o imóvel independentemente do valor de venda/locação
            if (CodigoImovel && (CodigoImovel as string).trim() !== "") {
                whereClause.CodigoImovel = {
                    contains: (CodigoImovel as string).trim(),
                    mode: 'insensitive'
                };
            }
        }

        // Aplicar demais filtros apenas se não for busca direta por código
        if (currentAction !== 'codigo') {
            if (pesquisa) {
                whereClause.OR = [
                    { SubTipoImovel: { contains: pesquisa as string, mode: 'insensitive' } },
                    { CodigoImovel: { contains: pesquisa as string, mode: 'insensitive' } },
                    { Bairro: { contains: pesquisa as string, mode: 'insensitive' } },
                    { Cidade: { contains: pesquisa as string, mode: 'insensitive' } },
                ];
            }

            if (TipoImovel) {
                whereClause.SubTipoImovel = {
                    equals: TipoImovel as string,
                    mode: 'insensitive'
                };
            }

            if (quartos) {
                whereClause.QtdDormitorios = {
                    gte: parseInt(quartos as string)
                };
            }

            if (condominio === '1') {
                whereClause.NomeCondominio = { not: "" };
            } else if (condominio === '0') {
                whereClause.NomeCondominio = { equals: "" };
            }

            // Intervalo de preços adaptativo (funciona para PrecoVenda ou PrecoLocacao)
            if (PrecoVenda) {
                const campoPreco = currentAction === 'alugar' ? 'PrecoLocacao' : 'PrecoVenda';
                const valorOpcao = PrecoVenda as string;

                if (currentAction === 'alugar') {
                    // Valores ajustados para faixa de aluguel (exemplo)
                    switch (valorOpcao) {
                        case '1': whereClause[campoPreco] = { gt: 0, lte: 1000 }; break;
                        case '2': whereClause[campoPreco] = { gte: 1000, lte: 2000 }; break;
                        case '3': whereClause[campoPreco] = { gte: 2000, lte: 3000 }; break;
                        case '4': whereClause[campoPreco] = { gte: 3000, lte: 5000 }; break;
                        case '5': whereClause[campoPreco] = { gte: 5000 }; break;
                    }
                } else {
                    // Valores para venda
                    switch (valorOpcao) {
                        case '1': whereClause[campoPreco] = { gt: 0, lte: 200000 }; break;
                        case '2': whereClause[campoPreco] = { gte: 200000, lte: 400000 }; break;
                        case '3': whereClause[campoPreco] = { gte: 400000, lte: 600000 }; break;
                        case '4': whereClause[campoPreco] = { gte: 600000, lte: 800000 }; break;
                        case '5': whereClause[campoPreco] = { gte: 800000, lte: 1000000 }; break;
                        case '6': whereClause[campoPreco] = { gte: 1000000 }; break;
                    }
                }
            }

            if (estilo) {
                switch (estilo as string) {
                    case 'condominio': whereClause.NomeCondominio = { not: "" }; break;
                    case 'lazer':
                        whereClause.Piscina = 1;
                        whereClause.Churrasqueira = 1;
                        break;
                    case 'espacoso':
                        whereClause.QtdDormitorios = { gte: 3 };
                        whereClause.QtdVagas = { gte: 1 };
                        break;
                    case 'oportunidades':
                        whereClause.OR = [{ AceitaPermuta: 1 }, { UtilizeFGTS: 1 }];
                        break;
                    case 'permuta': whereClause.AceitaPermuta = 1; break;
                    case 'fgts': whereClause.UtilizeFGTS = 1; break;
                }
            }

            if (Cidade && (Cidade as string).trim() !== "") {
                whereClause.Cidade = {
                    equals: (Cidade as string).trim(),
                    mode: 'insensitive'
                };
            }
        }

        // 3. Mapeamento da Ordenação
        let campoOrdenacao = currentAction === 'alugar' ? 'PrecoLocacao' : 'PrecoVenda';
        
        if (orderBy === 'titulo') {
            campoOrdenacao = 'SubTipoImovel';
        } else if (orderBy === 'PrecoLocacao' || orderBy === 'PrecoVenda' || orderBy === 'id') {
            campoOrdenacao = orderBy as string;
        }

        const direcaoOrdenacao = orderDirection === 'desc' ? 'desc' : 'asc';

        const orderByClause: any = [
            { [campoOrdenacao]: direcaoOrdenacao },
            { id: 'asc' } 
        ];

        // 4. Consulta Paralela via Transaction do Prisma
        const [totalItems, filteredProperties] = await prismaClient.$transaction([
            prismaClient.property.count({ where: whereClause }),
            prismaClient.property.findMany({
                where: whereClause,
                include: { Photos: true }, 
                skip: skip,
                take: itemsPerPage,
                orderBy: orderByClause
            })
        ]);

        const totalPaginas = Math.ceil(totalItems / itemsPerPage);

        // 5. Retorno da API
        res.json({
            resultado: filteredProperties,
            totalPaginas: totalPaginas || 1,
            totalItems
        });

    } catch (error) {
        console.error("Erro ao buscar imóveis no banco:", error);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

properties.get('/codigo/:slug', async (req: Request, res: Response) => {
    try {
        const { slug } = req.params;

        const property = await prismaClient.property.findFirst({
            where: { CodigoImovel: slug },
            include: { Photos: true },
        });

        if (!property) {
            return res.status(404).json({ error: 'Imóvel não encontrado' });
        }

        res.json(property);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar o imóvel' });
    }
});

properties.get('/ofertas', async (req: Request, res: Response) => {
    try {
        // Os 8 códigos que você deseja colocar nas ofertas prioritariamente
        const codigosOfertas = ['Psi269', 'Psi245', 'Psi151', 'PSI022', '123893ujds', '237rhf', '3h89de', '123edf'];

        // 1. Busca os imóveis que correspondem aos códigos fornecidos
        const ofertasEncontradas = await prismaClient.property.findMany({
            where: {
                CodigoImovel: { in: codigosOfertas }
            },
            include: { Photos: true }
        });

        let resultadoFinal = [...ofertasEncontradas];

        // 2. Se encontrou menos de 4, buscamos substitutos aleatórios
        if (resultadoFinal.length < 8) {
            const quantidadeFaltante = 8 - resultadoFinal.length;

            // Evita duplicar os imóveis que já localizamos por código
            const idsIgnorados = resultadoFinal.map(imovel => imovel.id);

            // Conta quantos outros registros existem disponíveis no banco
            const totalDisponivel = await prismaClient.property.count({
                where: {
                    id: { notIn: idsIgnorados }
                }
            });

            if (totalDisponivel > 0) {
                // Calcula um deslocamento (skip) randômico seguro
                const maxDisponivel = Math.max(0, totalDisponivel - quantidadeFaltante);
                const randomSkip = Math.floor(Math.random() * (maxDisponivel + 1));

                const imoveisSubstitutos = await prismaClient.property.findMany({
                    where: {
                        id: { notIn: idsIgnorados }
                    },
                    include: { Photos: true },
                    take: quantidadeFaltante,
                    skip: randomSkip
                });

                resultadoFinal = [...resultadoFinal, ...imoveisSubstitutos];
            }
        }

        // Retorna exatamente os 4 imóveis estruturados
        res.json(resultadoFinal.slice(0, 8));

    } catch (error) {
        console.error("Erro ao buscar ofertas da semana:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

properties.get('/destaques', async (req: Request, res: Response) => {
    try {
        // Os 3 códigos que você deseja destacar prioritariamente
        const codigosSelecionados = ['PSI169', 'PSI012', 'PSI311'];

        // 1. Busca os imóveis que correspondem aos códigos fornecidos
        const imoveisEncontrados = await prismaClient.property.findMany({
            where: {
                CodigoImovel: { in: codigosSelecionados }
            },
            include: { Photos: true }
        });

        let resultadoFinal = [...imoveisEncontrados];

        // 2. Se encontrou menos de 3, precisamos buscar substitutos aleatórios
        if (resultadoFinal.length < 3) {
            const quantidadeFaltante = 3 - resultadoFinal.length;

            // Pega os IDs dos imóveis que já temos para não repeti-los na busca aleatória
            const idsIgnorados = resultadoFinal.map(imovel => imovel.id);

            // Conta quantos outros imóveis existem no banco de dados para calcular o sorteio
            const totalDisponivel = await prismaClient.property.count({
                where: {
                    id: { notIn: idsIgnorados }
                }
            });

            if (totalDisponivel > 0) {
                // Gera um deslocamento (skip) aleatório seguro dentro do limite de registros existentes
                const razoavelMax = Math.max(0, totalDisponivel - quantidadeFaltante);
                const randomSkip = Math.floor(Math.random() * (razoavelMax + 1));

                const imoveisSubstitutos = await prismaClient.property.findMany({
                    where: {
                        id: { notIn: idsIgnorados }
                    },
                    include: { Photos: true },
                    take: quantidadeFaltante,
                    skip: randomSkip
                });

                resultadoFinal = [...resultadoFinal, ...imoveisSubstitutos];
            }
        }

        // Garante que retorne no máximo 3 itens (caso o banco tenha menos que 3 no total)
        res.json(resultadoFinal.slice(0, 3));

    } catch (error) {
        console.error("Erro ao buscar imóveis de destaque:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

properties.get('/cidades', async (req: Request, res: Response) => {
    try {
        const cidadesDistintas = await prismaClient.property.findMany({
            select: {
                Cidade: true,
            },
            distinct: ['Cidade'], // Remove duplicadas
            where: {
                Cidade: { not: "" } // Evita trazer registros sem cidade preenchida
            },
            orderBy: {
                Cidade: 'asc' // Organiza de A-Z
            }
        });

        // Formata o retorno para manter uma estrutura limpa para o front-end
        const resultadoFormatado = cidadesDistintas.map(item => ({
            Cidade: item.Cidade
        }));

        res.json(resultadoFormatado);
    } catch (error) {
        console.error("Erro ao buscar cidades dos imóveis:", error);
        res.status(500).json({ error: 'Erro interno ao buscar cidades' });
    }
});

// Rota para pegar apenas os tipos de imóveis existentes (sem repetir)
properties.get('/tipos', async (req: Request, res: Response) => {
    try {
        const tiposDistintos = await prismaClient.property.findMany({
            select: {
                SubTipoImovel: true, // Ou 'TipoImovel' dependendo de como está no seu schema.prisma
            },
            distinct: ['SubTipoImovel'], // Evita registros duplicados (Faz o papel do DISTINCT do SQL)
            where: {
                // Opcional: Garante que só vai trazer tipos de imóveis que não estejam nulos
                SubTipoImovel: { not: null } 
            },
            orderBy: {
                SubTipoImovel: 'asc' // Organiza de A-Z para o menu ficar bonito
            }
        });

        // Formata o retorno para bater com a estrutura que o seu frontend já espera
        const resultadoFormatado = tiposDistintos.map(item => ({
            TipoImovel: item.SubTipoImovel
        }));

        res.json(resultadoFormatado);
    } catch (error) {
        console.error("Erro ao buscar tipos de imóveis:", error);
        res.status(500).json({ error: 'Erro interno ao buscar tipos' });
    }
});

interface SlideRequest {
    codigo: string;
    img: string;
}

properties.post('/banners', async (req: Request, res: Response) => {
    try {
        // Recebe a lista local enviada pelo front-end
        const slidesLocais: SlideRequest[] = req.body.slides || [];

        if (slidesLocais.length === 0) {
            return res.status(400).json({ error: "Nenhum slide foi enviado." });
        }

        // Extrai apenas os códigos para fazer uma busca em lote no banco
        const codigosParaBuscar = slidesLocais.map(s => s.codigo);

        // 1. Busca os imóveis ativos correspondentes aos códigos enviados
        const imoveisEncontrados = await prismaClient.property.findMany({
            where: {
                CodigoImovel: { in: codigosParaBuscar }
                // Se você tiver um status de ativo, adicione aqui. Ex: Status: 'Ativo'
            },
            include: { Photos: true }
        });

        // 2. Prepara a lista de IDs para ignorar no sorteio (evita duplicar imóveis que já temos)
        const idsIgnorados = imoveisEncontrados.map(imovel => imovel.id);

        // 3. Monta o resultado final baseado EXATAMENTE na lista enviada
        const resultadoFinal = [];

        for (const slide of slidesLocais) {
            // Tenta encontrar o imóvel correspondente no banco de dados
            const imovelValido = imoveisEncontrados.find(
                imovel => imovel.CodigoImovel.toLowerCase() === slide.codigo.toLowerCase()
            );

            if (imovelValido) {
                // Se o imóvel existe e está disponível, mantém o slide original do front-end
                resultadoFinal.push({
                    codigo: imovelValido.CodigoImovel,
                    img: slide.img // Mantém a URL da pasta local sem marca d'água
                });
            } else {
                // Se NÃO encontrou (imóvel indisponível), sorteia um substituto na hora
                const totalDisponivel = await prismaClient.property.count({
                    where: { id: { notIn: idsIgnorados } }
                });

                if (totalDisponivel > 0) {
                    const randomSkip = Math.floor(Math.random() * totalDisponivel);

                    const imovelSubstituto = await prismaClient.property.findFirst({
                        where: { id: { notIn: idsIgnorados } },
                        include: { Photos: true },
                        skip: randomSkip
                    });

                    if (imovelSubstituto) {
                        // Adiciona o ID do sorteado na lista de ignorados para o próximo loop não repetir ele
                        idsIgnorados.push(imovelSubstituto.id);

                        // Pega a primeira imagem do banco de dados (tabela Photos)
                        // Ajuste para .url, .path ou .link de acordo com o seu banco
                        const fotoBanco = imovelSubstituto.Photos && imovelSubstituto.Photos.length > 0
                            ? imovelSubstituto.Photos[0].URLArquivo 
                            : "/img/placeholder.jpg";

                        resultadoFinal.push({
                            codigo: imovelSubstituto.CodigoImovel,
                            img: fotoBanco
                        });
                    } else {
                        // Fallback de segurança se o sorteio falhar (mantém o original para não quebrar a contagem)
                        resultadoFinal.push(slide);
                    }
                } else {
                    // Se não houver nenhum outro imóvel no banco para sortear, mantém o original
                    resultadoFinal.push(slide);
                }
            }
        }

        // Retorna exatamente a mesma quantidade recebida, porém tratada e higienizada
        res.json(resultadoFinal);

    } catch (error) {
        console.error("Erro ao processar banners inteligentes:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});


export default properties;