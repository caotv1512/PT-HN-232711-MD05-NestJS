import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productRepository: ProductsRepository
  ) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

 async findAll() {
    const products = await this.productRepository.findAll();
    return {
      message: "Get all products successfully",
      data: products,
      status: 200
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
