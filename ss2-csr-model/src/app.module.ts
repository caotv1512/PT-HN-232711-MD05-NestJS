import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/database/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest-database',
        entities: [User],
        synchronize: true,
      }
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
