import {Module} from '@nestjs/common';

import {SequelizeModule} from '@nestjs/sequelize';
import {User} from "../auth/entities/user.entity";
import {Status} from "../auth/entities/status.entity";
import {Experience} from "../auth/entities/experience.entity";
import {MasterCity} from "./entities/master.city";
import {MasterController} from './master.controller';
import {MasterService} from './master.service';
import {UsersService} from "../users/users.service";
import {ConfigModule} from "@nestjs/config";
import {MasterMenu} from "./entities/master.menu";
import {MasterError} from "./entities/master.error";
import {MasterSegment} from "./entities/master.segment";


@Module({
    imports: [
        ConfigModule.forRoot({
        isGlobal: true, // Makes ConfigModule available globally
    }),
        SequelizeModule.forFeature([MasterCity,MasterMenu,MasterError,MasterSegment])],
    providers: [MasterService],
    exports: [MasterService, SequelizeModule.forFeature([MasterCity])],
})
export class MasterModule {
}
