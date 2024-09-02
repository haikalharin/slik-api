import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/entities/user.entity";
import {Status} from "./entities/status.entity";
import {Experience} from "./entities/experience.entity";
import {UsersService} from "../users/users.service";
import {UserModule} from "../users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Replace with a more secure key in production
      signOptions: { expiresIn: '60m' }, // Token expiration time
    }),
      UserModule,

  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
