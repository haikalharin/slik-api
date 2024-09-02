import {Module} from '@nestjs/common';

import {SequelizeModule} from '@nestjs/sequelize';
import {User} from "../users/entities/user.entity";
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
import {MasterValidation} from "./entities/master.validation";
import {RoleAccess} from "../configuration/entities/role-access.entity";
import {RoleAccessDetail} from "../configuration/entities/role-access-detail.entity";


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // Makes ConfigModule available globally
        }),
        SequelizeModule.forFeature([MasterCity, MasterMenu, MasterError, MasterSegment,
            MasterValidation, RoleAccess, RoleAccessDetail])],
    providers: [MasterService],
    controllers: [MasterController],
    exports: [MasterService, SequelizeModule.forFeature([MasterCity])],
})
export class MasterModule {
}
