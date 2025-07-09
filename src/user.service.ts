import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './User.entity';
import { UseDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async listar(): Promise<UseDto[]> {
    const user = await this.userModel.findAll({ raw: true });
    return user.map((user) => ({
      nome: user.nome,
      id: user.id,
    }));
  }
  async remove(id: number): Promise<void> {
    await this.userModel.destroy({
      where: { id: id },
    });
  }

  async criar(nome: string) {
    return this.userModel.create({ nome });
  }
}
