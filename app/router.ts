import { Router } from "express";
// import { CreateEventosController } from "./controllers/createEventosSimulation";
// import { CreateCongregacaoController } from "./controllers/createCongregacaoSimulation";
// import { CreateObreirosController } from "./controllers/createObreirosSimulation";
import { FindEventosControlller } from "./controllers/findEventos";
import { FindCongregacoesController } from "./controllers/findCongregacoes";
import { FindEventosRecentsControlller } from "./controllers/findEventosRecents";
import obreirosNaCongregacao from "./obreiros-na-congregacao/route";
import kanban from "./obreiros-na-congregacao/kanban";


const router = Router();
const example = {
    name: "Felipe"
};

const FindEventos = new FindEventosControlller();
const FindEventosRecentes = new FindEventosRecentsControlller();
const FindCongregacoes = new FindCongregacoesController();

router.use('/obreiros-na-congregacao', obreirosNaCongregacao);
router.use('/kanban', kanban);

router.get('/eventos', FindEventos.handle);
router.get('/eventos/recentes', FindEventosRecentes.handle);
router.get('/congregacoes', FindCongregacoes.handle);

router.get("/", function (req, res) {
    res.json(example);
});

export { router };