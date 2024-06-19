import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './database/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {

  constructor(
    @InjectRepository(User) 
    private usersRepository : Repository<User>
  ) {}

  getUsers() {
    return this.usersRepository.find(); ;
  }

  getUserById(id: number) {
    
    return ;
  }
}
