import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declaration/cualificacion.declaration";
import { Cualificacion } from "../entity/Cualificacion"

export class CualificacionController{

    constructor(private repository: DatabaseRepository<Cualificacion>){}

    async list(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const cualificacion = await this.repository.List();
                res.status(200).json(cualificacion);

            } catch (error) {
                next(error);
            }
        }

    async get(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const {idCualificacion} = req.params;

                const cualificacion = await this.repository.get(parseInt(idCualificacion, 10))

                res.status(200).json(cualificacion);

            } catch (error) {
                next(error)
            }
        }

    }