import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria.entity";

@Entity()
export class Producto {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string
    
    @Column('decimal')
    precio: number
    
    @Column()
    descripcion: string
    
    @Column()
    imagen: string
    
    @Column({default: true})
    estado: boolean

    @ManyToOne(() => Categoria, (cat) => cat.productos, {eager: true})
    categoria: Categoria
}