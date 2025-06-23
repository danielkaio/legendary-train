import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './User.entity';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  exports: [SequelizeModule.forFeature([User])],
})
export class UsersModule {}
