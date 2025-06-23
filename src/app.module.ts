import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './User.entity';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { UsersModule } from './user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '172.20.0.2',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'test',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
