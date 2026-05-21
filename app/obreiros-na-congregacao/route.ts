// src/routes/obreirosNaCongregacao.ts
import { Router } from 'express'
import prismaClient from '../controllers/prismaClient'

const obreirosNaCongregacao = Router()

// Listar todos
obreirosNaCongregacao.get('/', async (req, res) => {
    const rows = await prismaClient.obreirosNaCongregacao.findMany({
        include: { Obreiros: true, Congregacao: true },
        orderBy: [{ congregacaoId: 'asc' }, { position: 'asc' }],
    })
    res.json(rows)
})

// Criar
obreirosNaCongregacao.post('/', async (req, res) => {
    const { obreirosId, congregacaoId, position } = req.body
    const row = await prismaClient.obreirosNaCongregacao.create({
        data: { obreirosId, congregacaoId, position },
    })
    res.status(201).json(row)
})

// Atualizar
obreirosNaCongregacao.patch('/:id', async (req, res) => {
    const { id } = req.params
    const row = await prismaClient.obreirosNaCongregacao.update({
        where: { id },
        data: req.body,
    })
    res.json(row)
})

// Remover
obreirosNaCongregacao.delete('/:id', async (req, res) => {
    const { id } = req.params
    await prismaClient.obreirosNaCongregacao.delete({ where: { id } })
    res.json({ ok: true })
})

export default obreirosNaCongregacao;
