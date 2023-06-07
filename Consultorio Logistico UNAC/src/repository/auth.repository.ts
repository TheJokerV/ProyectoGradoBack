import { NotFound } from "http-errors";

import database from "../config/database";

import { Empresa } from "../entity/Empresa";
import { DatabaseRepository, Query } from "../declaration/auth.declaration";

export class AuthRepository implements DatabaseRepository<Empresa>{
    
    //COMANDOS
    async auth(email: string, contraseña: string, query?: Query | undefined): Promise<Empresa> {
        const repository = database.getRepository(Empresa);

        const empresa = await repository.findOneOrFail({where:{email: email}});

        if (!empresa) throw new NotFound("Task does not exist.");

        return empresa;
    }
}