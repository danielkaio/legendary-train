import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreatePessoa } from './dto/create.dto';

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

  @Post()
  create(@Body() dto: CreatePessoa) {
    return this.appService.criar(dto.nome);
  }
}
