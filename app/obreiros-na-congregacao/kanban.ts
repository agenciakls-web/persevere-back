// src/routes/kanban.ts
import { Router } from 'express'
import prismaClient from '../controllers/prismaClient'

const kanban = Router()

// Listar board completo
kanban.get('/', async (_, res) => {
    const congregacoes = await prismaClient.congregacao.findMany({
        include: {
            Obreiros: {
                include: { Obreiros: true },
                orderBy: { position: 'asc' }
            }
        }
    })
    res.json(congregacoes)
})

// Atualizar posição (drag-and-drop)
kanban.patch('/:id', async (req, res) => {
    const { id } = req.params
    const { congregacaoId, position } = req.body
    const row = await prismaClient.obreirosNaCongregacao.update({
        where: { id },
        data: { congregacaoId, position }
    })
    res.json(row)
})

export default kanban
