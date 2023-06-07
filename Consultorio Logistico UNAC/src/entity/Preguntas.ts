import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Calificacion } from "./Calificacion";
import { Actividades } from "./Actividades";

@Index("actividades_idx", ["idActividades"], {})
@Entity("preguntas", { schema: "mydb" })
export class Preguntas {
  @PrimaryGeneratedColumn({ type: "int", name: "idPreguntas" })
  idPreguntas!: number;

  @Column("int", { name: "idActividades" })
  idActividades!: number;

  @Column("varchar", { name: "nombre", length: 200 })
  nombre!: string;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.idPregunta2)
  calificacions!: Calificacion[];

  @ManyToOne(() => Actividades, (actividades) => actividades.preguntas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "idActividades", referencedColumnName: "idActividades" },
  ])
  idActividades2!: Actividades;
}
