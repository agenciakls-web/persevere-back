import { Request, Response, Router } from "express"
import properties from "./properties/route";


const router = Router();
const example = {
    name: "Felipe"
};

router.use('/properties', properties);

router.get("/", function (req: Request, res: Response) {
    res.json(example);
});

export { router };