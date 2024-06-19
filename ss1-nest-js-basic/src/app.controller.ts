import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello() {
    console.log('Controller');
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(){
    return this.appService.getUsers();
  }
}
