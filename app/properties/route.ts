// src/routes/obreirosNaCongregacao.ts
import { Request, Response, Router } from 'express'
import prismaClient from '../controllers/prismaClient';

const properties = Router()

properties.get('/', async (req: Request, res: Response) => {
    const properties = await prismaClient.property.findMany({
        include: { photos: true },
    });
    res.json(properties);
})

export default properties;
