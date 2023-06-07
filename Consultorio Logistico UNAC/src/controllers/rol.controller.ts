import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declaration/rol.declaration";
import { Rol } from "../entity/Rol"

export class RolController{

    constructor(private repository: DatabaseRepository<Rol>){}

    async list(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const roles = await this.repository.List();
                res.status(200).json(roles);

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
                const {idRol} = req.params;

                const rol = await this.repository.get(parseInt(idRol, 10))

                res.status(200).json(rol);

            } catch (error) {
                next(error)
            }
        }

    }