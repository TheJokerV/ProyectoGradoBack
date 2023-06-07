import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const checkAuth = (req: Request, res: Response, next: NextFunction)=>{
    const token = <string>req.headers['auth'];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, "prueba");
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        return res.status(401).json({message: "No esta autorizado."})
    }

    const {idEmpresa, email} = jwtPayload;
    const newToken = jwt.sign({idEmpresa, email}, "prueba", {expiresIn: "1h"});

    res.setHeader('token', newToken);
    next();

}