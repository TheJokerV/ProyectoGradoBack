import { NotFound } from "http-errors";

import database from "../config/database";

import { Actividades } from "../entity/Actividades";
import { DatabaseRepository, Query } from "../declaration/actividades.declaration";
import { Preguntas } from "../entity/Preguntas"

export class ActividadesRepository implements DatabaseRepository<Actividades>{
    
    //COMANDOS
    async List(query?: Query | undefined): Promise<Actividades[]> {
        const repository = database.getRepository(Actividades);
        return repository.find();
    }
    
    async get(idActividades: number, query?: Query | undefined): Promise<Actividades> {
        const repository = database.getRepository(Actividades);

        const actividad = await repository.findOneOrFail({where:{idActividades: idActividades}});

        if (!actividad) throw new NotFound("Task does not exist.");

        return actividad;
    }

    async getActivities() {
        const repositoryActividades = database.getRepository(Actividades);
        const lista  = await repositoryActividades.query(`SELECT act.idActividades, act.nombre, pre.idPreguntas, pre.nombre
        FROM Preguntas pre INNER JOIN Actividades act ON act.idActividades = pre.idActividades
        `)

        const actividadesAgrupadas = lista.reduce((resultado: any, valorActual: any) => {
            const idActividad = valorActual.idActividades;
            const pregunta = {
              idPregunta: valorActual.idPreguntas,
              nombre: valorActual.nombre,
            };
            if (!resultado[idActividad]) {
              resultado[idActividad] = {
                idActividad,
                preguntas: [],
              };
            }
            resultado[idActividad].preguntas.push(pregunta);
            return resultado;
          }, {});

        return Object.values(actividadesAgrupadas);
    }
}