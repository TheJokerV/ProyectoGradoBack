import * as bcryptjs from "bcryptjs";

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Calificacion } from "./Calificacion";
import { Rol } from "./Rol";

@Index("empRol_idx", ["rol"], {})
@Entity("empresa", { schema: "mydb" })
@Unique(['email'])
export class Empresa {
  @PrimaryGeneratedColumn({ type: "int", name: "idEmpresa" })
  idEmpresa!: number;

  @Column("varchar", { name: "nombre", length: 100 })
  nombre!: string;

  @Column("varchar", { name: "contactoPrincipal", length: 45 })
  contactoPrincipal!: string;

  @Column("varchar", { name: "telefono", length: 45 })
  telefono!: string;

  @Column("varchar", { name: "email", length: 80 })
  email!: string;

  @Column("varchar", { name: "contraseña", length: 200 })
  contraseA!: string;

  @Column("int", { name: "rol" })
  rol!: number;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.idEmpresa2)
  calificacions!: Calificacion[];

  @ManyToOne(() => Rol, (rol) => rol.empresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "rol", referencedColumnName: "idRol" }])
  rol2!: Rol;

  hashPassword(): void{
    const salt = bcryptjs.genSaltSync(10);
    this.contraseA = bcryptjs.hashSync(this.contraseA, salt);
  }

  checkPassword(contraseña: string): boolean{
    return bcryptjs.compareSync(contraseña, this.contraseA);
  }

}
