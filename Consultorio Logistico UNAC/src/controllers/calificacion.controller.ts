import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declaration/calificacion.declaration"
import { Calificacion } from "../entity/Calificacion"

export class CalificacionController{

    constructor(private repository: DatabaseRepository<Calificacion>){}

    async create(req: Request, res: Response): Promise<any> {
        try {
          const body: Array<Calificacion> = req.body;
      
          const result = await this.repository.create(body);      
          return res.status(200).json({ result });
          
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: 'Ha ocurrido un error' });
        }
      }

    async get(
      req: Request, 
      res: Response,
      next: NextFunction
      ): Promise<any> {
        try {
          
          const {idEmpresa} = req.params;

          const calificaciones = await this.repository.get(parseInt(idEmpresa, 10));

          res.status(200).json(calificaciones);

        } catch (error) {
          next(error)
        }
    }

    }