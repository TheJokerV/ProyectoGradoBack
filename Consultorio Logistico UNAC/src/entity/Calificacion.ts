import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Empresa } from "./Empresa";
import { Preguntas } from "./Preguntas";

@Index("calEmpresa_idx", ["idEmpresa"], {})
@Index("calPreguntas_idx", ["idPregunta"], {})
@Entity("calificacion", { schema: "mydb" })
export class Calificacion {
  @Column("int", { primary: true, name: "idEmpresa" })
  idEmpresa!: number;

  @Column("int", { primary: true, name: "idPregunta" })
  idPregunta!: number;

  @Column("timestamp", {
    primary: true,
    name: "fecha",
    default: () => "CURRENT_TIMESTAMP",
  })
  fecha!: Date;

  @Column("int", { name: "calificacion" })
  calificacion!: number;

  @ManyToOne(() => Empresa, (empresa) => empresa.calificacions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idEmpresa", referencedColumnName: "idEmpresa" }])
  idEmpresa2!: Empresa;

  @ManyToOne(() => Preguntas, (preguntas) => preguntas.calificacions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idPregunta", referencedColumnName: "idPreguntas" }])
  idPregunta2!: Preguntas;
}
