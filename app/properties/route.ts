import { Request, Response, Router } from 'express'
import prismaClient from '../controllers/prismaClient';

const properties = Router()

properties.get('/', async (req: Request, res: Response) => {
    try {
        // 1. Desestruturando os query params enviados pelo Axios
        const {
            page,
            pesquisa,
            TipoImovel,
            PrecoVenda,
            quartos,
            condominio
        } = req.query;

        // 2. Configuração da Paginação
        const itemsPerPage = 9; // Quantidade por página (deve bater com o 'limit' do frontend)
        const currentPage = Math.max(1, parseInt(page as string) || 1);
        const skip = (currentPage - 1) * itemsPerPage;

        // 3. Construindo dinamicamente o objeto de filtros (where) do Prisma
        const whereClause: any = {};

        // Filtro de pesquisa por texto (busca no SubTipo, Bairro ou Cidade) [cite: 3, 14]
        if (pesquisa) {
            whereClause.OR = [
                { SubTipoImovel: { contains: pesquisa as string, mode: 'insensitive' } },
                { Bairro: { contains: pesquisa as string, mode: 'insensitive' } },
                { Cidade: { contains: pesquisa as string, mode: 'insensitive' } },
            ];
        }

        // Filtro por Tipo de Imóvel [cite: 2, 18]
        if (TipoImovel) {
            whereClause.SubTipoImovel = {
                equals: TipoImovel as string,
                mode: 'insensitive'
            };
        }

        // Filtro por Quantidade Mínima de Quartos [cite: 4, 69]
        if (quartos) {
            whereClause.QtdDormitorios = {
                gte: parseInt(quartos as string)
            };
        }

        // Filtro por Condomínio Fechado (Geralmente um booleano no banco) [cite: 86]
        if (condominio === '1' || condominio === '0') {
            // Se no seu banco for Boolean (true/false)
            whereClause.EmCondominio = condominio === '1';

            // Se no seu banco for numérico (1/0), descomente a linha abaixo e comente a de cima:
            // whereClause.EmCondominio = parseInt(condominio);
        }

        // Filtro por Faixa de Preço [cite: 4, 39]
        if (PrecoVenda) {
            switch (PrecoVenda as string) {
                case '1': whereClause.PrecoVenda = { lte: 200000 }; break;
                case '2': whereClause.PrecoVenda = { gte: 200000, lte: 400000 }; break;
                case '3': whereClause.PrecoVenda = { gte: 400000, lte: 600000 }; break;
                case '4': whereClause.PrecoVenda = { gte: 600000, lte: 800000 }; break;
                case '5': whereClause.PrecoVenda = { gte: 800000, lte: 1000000 }; break;
                case '6': whereClause.PrecoVenda = { gte: 1000000 }; break;
            }
        }

        // 4. Executa as queries no banco de forma paralela (ganho de performance)
        const [totalItems, filteredProperties] = await prismaClient.$transaction([
            prismaClient.property.count({ where: whereClause }),
            prismaClient.property.findMany({
                where: whereClause,
                include: { photos: true }, // [cite: 4, 112]
                skip: skip,
                take: itemsPerPage,
                orderBy: { id: 'desc' } // Opcional: mostra os mais recentes primeiro [cite: 4]
            })
        ]);

        // 5. Calcula o total de páginas existentes
        const totalPaginas = Math.ceil(totalItems / itemsPerPage);

        // 6. Retorna a estrutura esperada pelo componente frontend
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

// Nova rota adicionada no backend para buscar pelo slug
properties.get('/codigo/:slug', async (req: Request, res: Response) => {
    try {
        const { slug } = req.params;

        const property = await prismaClient.property.findFirst({
            where: { CodigoImovel: slug },
            include: { photos: true },
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
        // Os 4 códigos que você deseja colocar nas ofertas prioritariamente
        const codigosOfertas = ['Psi269', 'Psi245', 'Psi151', 'PSI022'];

        // 1. Busca os imóveis que correspondem aos códigos fornecidos
        const ofertasEncontradas = await prismaClient.property.findMany({
            where: {
                CodigoImovel: { in: codigosOfertas }
            },
            include: { photos: true }
        });

        let resultadoFinal = [...ofertasEncontradas];

        // 2. Se encontrou menos de 4, buscamos substitutos aleatórios
        if (resultadoFinal.length < 4) {
            const quantidadeFaltante = 4 - resultadoFinal.length;

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
                    include: { photos: true },
                    take: quantidadeFaltante,
                    skip: randomSkip
                });

                resultadoFinal = [...resultadoFinal, ...imoveisSubstitutos];
            }
        }

        // Retorna exatamente os 4 imóveis estruturados
        res.json(resultadoFinal.slice(0, 4));

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
            include: { photos: true }
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
                    include: { photos: true },
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

export default properties;