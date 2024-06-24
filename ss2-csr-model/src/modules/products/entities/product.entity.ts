import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    JoinColumn,
    ManyToOne,
} from "typeorm"
import { Category } from "../../category/entities/category.entity"

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToOne((type) => Category, (category) => category.products, {
        cascade: true,
    })
    @JoinColumn({name: "category_id",})
    category: Category[]
}