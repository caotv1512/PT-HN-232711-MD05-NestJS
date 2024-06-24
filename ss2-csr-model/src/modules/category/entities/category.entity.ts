import { Products } from "src/modules/products/entities/product.entity"
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm"


@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany((type) => Products, (product) => product.category)
    products: Products[]
}