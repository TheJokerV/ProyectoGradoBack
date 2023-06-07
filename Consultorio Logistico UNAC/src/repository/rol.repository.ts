import { NotFound } from "http-errors";

import database from "../config/database";

import { Rol } from "../entity/Rol";
import { DatabaseRepository, Query } from "../declaration/rol.declaration";

export class RolRepository implements DatabaseRepository<Rol>{
    
    //COMANDOS
    async List(query?: Query | undefined): Promise<Rol[]> {
        const repository = database.getRepository(Rol);
        return repository.find();
    }
    
    async get(idRol: number, query?: Query | undefined): Promise<Rol> {
        const repository = database.getRepository(Rol);

        const rol = await repository.findOneOrFail({where:{idRol: idRol}});

        if (!rol) throw new NotFound("Task does not exist.");

        return rol;
    }  
}