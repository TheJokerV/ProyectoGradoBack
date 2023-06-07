import { NotFound } from "http-errors";

import database from "../config/database";

import { Cualificacion } from "../entity/Cualificacion";
import { DatabaseRepository, Query } from "../declaration/cualificacion.declaration";

export class CualificacionRepository implements DatabaseRepository<Cualificacion>{
    
    //COMANDOS
    async List(query?: Query | undefined): Promise<Cualificacion[]> {
        const repository = database.getRepository(Cualificacion);
        return repository.find();
    }
    
    async get(idCualificacion: number, query?: Query | undefined): Promise<Cualificacion> {
        const repository = database.getRepository(Cualificacion);

        const cualificacion = await repository.findOneOrFail({where:{idCualificacion: idCualificacion}});

        if (!cualificacion) throw new NotFound("Task does not exist.");

        return cualificacion;
    }  
}