import { Request, Response, NextFunction } from "express";

import { Empresa } from "../entity/Empresa";
import database from "../config/database";

export const checkRole = (roles: Array<number>)=>{
    return async (req: Request, res: Response, next: NextFunction)=>{
        const {idEmpresa} = res.locals.jwtPayload;
        const empresaRepository = database.getRepository(Empresa);
        let empresa: Empresa;
        try {
            empresa = await empresaRepository.findOneOrFail({where: {idEmpresa: idEmpresa}})
        } catch (error) {
            return res.status(401).json({message: "No autorizado."})
        }

        const {rol} = empresa;
        if (roles.includes(rol)){
            next();
        }else{
            return res.status(401).json({message: "No autorizado."})
        }
}
}