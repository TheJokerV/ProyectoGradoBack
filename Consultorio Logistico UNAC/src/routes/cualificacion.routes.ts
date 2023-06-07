import {Router} from "express";

import { CualificacionController } from "../controllers/cualificacion.controller";
import { CualificacionRepository } from "../repository/cualificacion.repository";
import { checkAuth } from "../middlewares/jwt";

const router = Router();

const controller = new CualificacionController(
    new CualificacionRepository()
);

router.get("/cuaList",[checkAuth], controller.list.bind(controller));

router.get("/cuaGetBy/:idCualificacion", [checkAuth], controller.get.bind(controller));

export default router;