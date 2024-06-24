import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,

    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const { title, description, price, productImage, categoryId } =
      createProductDto;
    const category = await this.categoryRepository.findOne({
      where: { id: categoryId },
    });

    const checkProduct = await this.productsRepository.findOne({
      where: { title },
    });

    if (checkProduct) {
      throw new HttpException('Product already exists', 409);
    }

    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const newProduct = {
      ...createProductDto,
      category,
    };
    const product = await this.productsRepository.save(newProduct);
    return product;
  }

  async findAll() {
    const products = await this.productsRepository.find();
    return products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    const product = this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return await this.productsRepository.delete(id);
  }
}
