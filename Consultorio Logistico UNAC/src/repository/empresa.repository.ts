import { NotFound } from "http-errors";

import database from "../config/database";

import { Empresa } from "../entity/Empresa";
import { DatabaseRepository, Query } from "../declaration/empresas.declaration";

export class EmpresaRepository implements DatabaseRepository<Empresa>{
    
    //COMANDOS
    async create(data: Partial<Empresa>, query?: Query | undefined): Promise<Empresa> {
        const repository = database.getRepository(Empresa);

        const empresa = repository.create(data);

        empresa.hashPassword();

        await repository.save(empresa);

        return empresa;
    }

    async List(query?: Query | undefined): Promise<Empresa[]> {
        const repository = database.getRepository(Empresa);
        return repository.find();
    }
    
    async get(idEmpresa: number, query?: Query | undefined): Promise<Empresa> {
        const repository = database.getRepository(Empresa);

        const empresa = await repository.findOneOrFail({where:{idEmpresa: idEmpresa }});

        if (!empresa) throw new NotFound("Task does not exist.");

        return empresa;
    }

    async update(idEmpresa: number, data: Empresa, query?: Query | undefined): Promise<Empresa> {
        const repository = database.getRepository(Empresa);

        await repository.update(idEmpresa, data);

        return this.get(idEmpresa, query);
    }

    async remove(idEmpresa: number, query?: Query | undefined): Promise<Empresa> {
        const repository = database.getRepository(Empresa);

        const empresa = await this.get(idEmpresa, query);

        await repository.delete(idEmpresa);

        return empresa;
    }
    
}