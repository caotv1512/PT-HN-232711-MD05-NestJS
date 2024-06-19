import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  getUsers() {
    const users = this.userRepository.getUsers();
    return users;
  }

  getUserById(id: number) {
    const user = this.userRepository.getUserById(id);
    return user;
  }
}
