import { Injectable } from '@nestjs/common';

@Injectable()
export class AppRepository {
  private users = [
   {
    id: 1,
    name: 'John',
    age: 20,
   },
   {
    id: 2,
    name: 'Jane',
    age: 21,
   },
   {
    id: 3,
    name: 'Jim',
    age: 22,
   },
   {
    id: 4,
    name: 'Jill',
    age: 23,
   },
  ]
  getHello() {
    console.log('Repository');

    return 'Hello from Rikkei EDU!';
  }

  getUsers() {
    return this.users;
  }
}
