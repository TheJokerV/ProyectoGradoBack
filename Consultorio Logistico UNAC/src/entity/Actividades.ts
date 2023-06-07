import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Preguntas } from "./Preguntas";

@Entity("actividades", { schema: "mydb" })
export class Actividades {
  @PrimaryGeneratedColumn({ type: "int", name: "idActividades" })
  idActividades!: number;

  @Column("varchar", { name: "nombre", length: 200 })
  nombre!: string;

  @OneToMany(() => Preguntas, (preguntas) => preguntas.idActividades2)
  preguntas!: Preguntas[];
}
