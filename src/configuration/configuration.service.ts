import {Injectable, Logger} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {RoleAccess} from "./entities/role-access.entity";
import {MasterValidation} from "../master/entities/master.validation";
import {RoleAccessDetail} from "./entities/role-access-detail.entity";

@Injectable()
export class ConfigurationService {
    private readonly logger = new Logger(ConfigurationService.name);

    constructor(
        @InjectModel(RoleAccess)
        private readonly roleAccess: typeof RoleAccess,
        @InjectModel(RoleAccessDetail)
        private readonly roleAccessDetail: typeof RoleAccessDetail,
    ) {
    }


    async findAllRoleAccess(): Promise<RoleAccess[]> {
        return this.roleAccess.findAll();
    }

    async checkUserExistsByRoleAccessName(roleAccessName: string): Promise<boolean> {
        const user = await this.roleAccess.findOne({where: {roleAccessName: roleAccessName}});
        return !!user; // Returns true if user exists, false otherwise
    }

    async createCity(data: Partial<RoleAccess>): Promise<RoleAccess> {
        // Create a Partial<User> object instead of a full User instance
        const masterCity: Partial<RoleAccess> = {
            roleAccessName: data.roleAccessName,
            description : data.description,
        };
        return this.roleAccess.create(masterCity);
    }
}
