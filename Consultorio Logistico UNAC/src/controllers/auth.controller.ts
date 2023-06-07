import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declaration/auth.declaration"
import { Empresa } from "../entity/Empresa"
import * as jwt from "jsonwebtoken";

export class AuthController{

    constructor(private repository: DatabaseRepository<Empresa>){}

    async auth(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<any> {
            try {
                const {email, contraseña} = req.body;
    
                const empresa = await this.repository.auth(email, contraseña)

                if (!empresa.checkPassword(contraseña)){
                    return res.status(400).json({message: "email or password incorrectos."});
                }
                const token = jwt.sign({idEmpresa: empresa.idEmpresa, email: empresa.email}, "prueba", {expiresIn: "1h"})
    
                res.status(200).json({message: "Ok", token:token});
                
            } catch (error) {
                res.status(404).json({message: "email or password incorrectos."})
            }

        }

    }