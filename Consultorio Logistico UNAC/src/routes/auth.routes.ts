import {Router} from "express";

import { AuthController } from "../controllers/auth.controller";
import { AuthRepository } from "../repository/auth.repository";

const router = Router();

const controller = new AuthController(
    new AuthRepository()
);

router.post("/", controller.auth.bind(controller));

export default router;