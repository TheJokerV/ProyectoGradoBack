import { DataSource } from "typeorm";
import { Empresa } from "../entity/Empresa";
import { Actividades } from "../entity/Actividades";
import { Calificacion } from "../entity/Calificacion";
import { Cualificacion } from "../entity/Cualificacion";
import { Preguntas } from "../entity/Preguntas";
import { Rol } from "../entity/Rol";

export default new DataSource({
    type: "mysql",
    host: "proyectogrado.mysql.database.azure.com",
    port: 3306,
    username: "andres",
    password: "LGsus1824",
    database: "mydb",
    synchronize: false,
    logging: true,
    entities: [Actividades, Calificacion, Cualificacion, Empresa, Preguntas, Rol],
    subscribers: [],
    migrations: [],
    ssl: {
        rejectUnauthorized: false,
    }
})