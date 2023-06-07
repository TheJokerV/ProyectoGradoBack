import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "./Empresa";

@Entity("rol", { schema: "mydb" })
export class Rol {
  @PrimaryGeneratedColumn({ type: "int", name: "idRol" })
  idRol!: number;

  @Column("varchar", { name: "descripcion", length: 45 })
  descripcion!: string;

  @OneToMany(() => Empresa, (empresa) => empresa.rol2)
  empresas!: Empresa[];
}
