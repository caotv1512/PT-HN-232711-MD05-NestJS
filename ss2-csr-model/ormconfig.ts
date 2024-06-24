import { Category } from "src/modules/category/entities/category.entity";
import { Products } from "src/modules/products/entities/product.entity";
import { User } from "src/modules/users/database/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
require('dotenv').config();
console.log(process.env.DB_HOST, 'Database');

const config: MysqlConnectionOptions =  {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || '',
    entities: [User, Category, Products],
    synchronize: true,
  }

  export default config;