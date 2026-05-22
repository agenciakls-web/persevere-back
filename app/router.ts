import { Request, Response, Router } from "express"
import properties from "./properties/route";
import GetImoveisController from "./controllers/PropertiesController";


const router = Router();
const example = {
    name: "Felipe"
};
const getImoveisController = new GetImoveisController();

router.get("/getimoveis-api", (request, response) => {
    return getImoveisController.handle(request, response);
});

router.use('/imoveis', properties);

router.get("/", function (req: Request, res: Response) {
    res.json(example);
});

export { router };