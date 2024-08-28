import {Injectable, Logger} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../auth/entities/user.entity";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {MasterCity} from "./entities/master.city";

@Injectable()
export class MasterService {
    private readonly logger = new Logger(MasterService.name);
    constructor(
        @InjectModel(MasterCity)
        private readonly masterCity: typeof MasterCity) {}

    async findAllMasterCity(): Promise<MasterCity[]> {
        return this.masterCity.findAll();
    }

}
