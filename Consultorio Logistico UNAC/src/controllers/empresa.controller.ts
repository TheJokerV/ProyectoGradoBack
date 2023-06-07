import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declaration/empresas.declaration"
import { Empresa } from "../entity/Empresa"

export class EmpresaController{

    constructor(private repository: DatabaseRepository<Empresa>){}

    async create(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const body = req.body;

                console.log('Body: ', body);
    
                const empresa = await this.repository.create(body)
    
                res.status(200).json({message: 'Cuenta creada exitosamente.'});
                
            } catch (error) {
                res.status(404).json({message: 'Email ya registrado.'})
            }

        }


    async list(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const empresas = await this.repository.List();
                res.status(200).json(empresas);

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
                const {idEmpresa} = req.params;

                const empresa = await this.repository.get(parseInt(idEmpresa))

                res.status(200).json(empresa);

            } catch (error) {
                next(error)
            }
        }

    async update(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const {idEmpresa} = req.params;

                const body = req.body;

                const empresa = await this.repository.update(parseInt(idEmpresa), body);

                res.status(200).json(empresa);

            } catch (error) {
                next(error)
            }
        }

    async remove(
        req: Request, 
        res: Response, 
        next: NextFunction
         ):Promise<void> {
           try {
            const {idEmpresa} = req.params;

            const empresa = await this.repository.remove(parseInt(idEmpresa));

            res.status(200).json(empresa);

           } catch (error) {
            next(error)
           }
        }
    }