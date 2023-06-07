import {Router} from "express";

import { EmpresaController } from "../controllers/empresa.controller";
import { EmpresaRepository } from "../repository/empresa.repository";
import { checkAuth } from "../middlewares/jwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

const controller = new EmpresaController(
    new EmpresaRepository()
);

router.post("/empPost", controller.create.bind(controller));

router.get("/empList", [checkAuth, checkRole([1])], controller.list.bind(controller));

router.get("/empGetBy/:idEmpresa", [checkAuth, checkRole([1])], controller.get.bind(controller));

router.put("/empUpd/:idEmpresa", [checkAuth, checkRole([1])], controller.update.bind(controller));

router.delete("/empDel/:idEmpresa", [checkAuth, checkRole([1])], controller.remove.bind(controller));

export default router;