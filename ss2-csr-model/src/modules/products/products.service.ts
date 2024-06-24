import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productRepository: ProductsRepository
  ) {}
  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return product;
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

  async remove(id: number) {
    return await this.productRepository.remove(id);
  }
}
