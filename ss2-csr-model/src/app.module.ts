import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/database/user.entity';
import { ProductsModule } from './modules/products/products.module';
import { CategoryModule } from './modules/category/category.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, ProductsModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
