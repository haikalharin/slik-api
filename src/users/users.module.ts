import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import {User} from "../auth/entities/user.entity";
import {Status} from "../auth/entities/status.entity";
import {Experience} from "../auth/entities/experience.entity";
import { UsersService} from "./users.service";


@Module({
  imports: [SequelizeModule.forFeature([User, Status, Experience])],
  providers: [UsersService],
  exports: [UsersService],

})
export class UserModule {}
