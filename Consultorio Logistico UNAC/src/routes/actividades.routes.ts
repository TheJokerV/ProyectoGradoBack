import {Router} from "express";

import { ActividadesController } from "../controllers/actividades.controller";
import { ActividadesRepository } from "../repository/actividades.repository";
import { checkAuth } from "../middlewares/jwt";

const router = Router();

const controller = new ActividadesController(
    new ActividadesRepository()
);

router.get("/actList",[checkAuth], controller.list.bind(controller));

router.get("/actGetBy/:idActividades", [checkAuth], controller.get.bind(controller));

router.get("/actGetActivities", [checkAuth], controller.getActivities.bind(controller))

export default router;