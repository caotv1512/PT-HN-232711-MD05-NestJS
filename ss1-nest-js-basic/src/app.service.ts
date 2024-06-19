import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}
  getHello() {
    console.log('Service');
    return this.appRepository.getHello();
  }

  getUsers() {
    const users = this.appRepository.getUsers();
    const resUser = users.filter((user) => user.age % 2 === 0);
    return resUser;
  }
}
