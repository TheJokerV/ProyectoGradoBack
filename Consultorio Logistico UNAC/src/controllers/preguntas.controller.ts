import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declaration/preguntas.declaration";
import { Preguntas } from "../entity/Preguntas"

export class PreguntasController{

    constructor(private repository: DatabaseRepository<Preguntas>){}

    async list(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const preguntas = await this.repository.List();
                res.status(200).json(preguntas);

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
                const {idPreguntas} = req.params;

                const preguntas = await this.repository.get(parseInt(idPreguntas, 10))

                res.status(200).json(preguntas);

            } catch (error) {
                next(error)
            }
        }

    }