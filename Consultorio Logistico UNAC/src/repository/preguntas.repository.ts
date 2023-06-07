import { NotFound } from "http-errors";

import database from "../config/database";

import { Preguntas } from "../entity/Preguntas";
import { DatabaseRepository, Query } from "../declaration/preguntas.declaration";

export class PreguntasRepository implements DatabaseRepository<Preguntas>{
    
    //COMANDOS
    async List(query?: Query | undefined): Promise<Preguntas[]> {
        const repository = database.getRepository(Preguntas);
        return repository.find();
    }
    
    async get(idPreguntas: number, query?: Query | undefined): Promise<Preguntas> {
        const repository = database.getRepository(Preguntas);

        const preguntas = await repository.findOneOrFail({where:{idPreguntas: idPreguntas}});

        if (!preguntas) throw new NotFound("Task does not exist.");

        return preguntas;
    }  
}