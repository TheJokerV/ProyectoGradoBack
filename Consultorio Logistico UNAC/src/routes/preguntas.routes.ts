import {Router} from "express";

import { PreguntasController } from "../controllers/preguntas.controller";
import { PreguntasRepository } from "../repository/preguntas.repository";
import { checkAuth } from "../middlewares/jwt";

const router = Router();

const controller = new PreguntasController(
    new PreguntasRepository()
);

router.get("/prgList",[checkAuth], controller.list.bind(controller));

router.get("/prgGetBy/:idPreguntas",[checkAuth], controller.get.bind(controller));

export default router;