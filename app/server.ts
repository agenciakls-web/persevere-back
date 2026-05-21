
import express from "express"
import { router } from "./router";
import cors from 'cors';

const app = express();

// Configuração do CORS
const corsOptions = {
    origin: [
        'https://www.persevere.com.br',
        'https://persevere.com.br',
        'http://persevere.com.br',
        'http://www.persevere.com.br',
        'http://localhost:3001',
        'http://localhost:3000',
    ], // Permite apenas requisições do front-end em localhost:3001
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
};

app.use(cors(corsOptions)); // Usando o middleware CORS


app.use((req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    next();
});

app.use(express.json());

app.use(router);

app.listen(3001);