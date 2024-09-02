import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { ConfigurationController } from './configuration.controller';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {RoleAccess} from "./entities/role-access.entity";
import {RoleAccessDetail} from "./entities/role-access-detail.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
    }),
    SequelizeModule.forFeature([ RoleAccess, RoleAccessDetail])],
  providers: [ConfigurationService],
  controllers: [ConfigurationController],
  exports: [ConfigurationService, SequelizeModule.forFeature([RoleAccess, RoleAccessDetail])],

})
export class ConfigurationModule {}

