import { Column, Entity } from "typeorm";

@Entity("cualificacion", { schema: "mydb" })
export class Cualificacion {
  @Column("int", { primary: true, name: "idCualificacion" })
  idCualificacion!: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 45 })
  nombre!: string | null;

  @Column("int", { name: "min", nullable: true })
  min!: number | null;

  @Column("int", { name: "max", nullable: true })
  max!: number | null;
}
