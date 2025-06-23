import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/pessoas')
export class AppController {
  constructor(private readonly appService: UserService) {}

  @Get()
  listar() {
    return this.appService.listar();
  }

  @Delete(':id')
  remover(@Param('id') id: number) {
    return this.appService.remove(id);
  }
}
