import {Router} from "express";

import { RolController } from "../controllers/rol.controller";
import { RolRepository } from "../repository/rol.repository";
import { checkAuth } from "../middlewares/jwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

const controller = new RolController(
    new RolRepository()
);

router.get("/rolList",[checkAuth, checkRole([1])], controller.list.bind(controller));

router.get("/rolGetBy/:idRol", [checkAuth, checkRole([1])], controller.get.bind(controller));

export default router;