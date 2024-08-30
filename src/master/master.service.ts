import {Injectable, Logger} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../auth/entities/user.entity";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {MasterCity} from "./entities/master.city";
import {MasterMenu} from "./entities/master.menu";
import {MasterError} from "./entities/master.error";
import {MasterSegment} from "./entities/master.segment";

@Injectable()
export class MasterService {
    private readonly logger = new Logger(MasterService.name);
    constructor(
        @InjectModel(MasterCity)
        private readonly masterCity: typeof MasterCity,
        @InjectModel(MasterMenu)
        private readonly masterMenu: typeof MasterMenu,
        @InjectModel(MasterError)
        private readonly masterError: typeof MasterError,
        @InjectModel(MasterSegment)
        private readonly masterSegment: typeof MasterSegment,

        ) {}


    async findAllMasterCity(): Promise<MasterCity[]> {
        return this.masterCity.findAll();
    }
    async checkUserExistsByCityName(cityName: string): Promise<boolean> {
        const user = await this.masterCity.findOne({ where: { cityName } });
        return !!user; // Returns true if user exists, false otherwise
    }

    async createCity(data: Partial<MasterCity>): Promise<MasterCity> {
        // Create a Partial<User> object instead of a full User instance
        const masterCity: Partial<MasterCity> = {
            cityCode: data.cityCode,
            cityName: data.cityName,
        };
        return this.masterCity.create(masterCity);
    }

    async findAllMasterMenu(): Promise<MasterMenu[]> {
        return this.masterMenu.findAll();
    }
    async checkUserExistsByMenuName(menuName: string): Promise<boolean> {
        const data = await this.masterMenu.findOne({ where: { menuName } });
        return !!data; // Returns true if user exists, false otherwise
    }

    async createMenu(data: Partial<MasterMenu>): Promise<MasterMenu> {
        // Create a Partial<User> object instead of a full User instance
        const masterMenu: Partial<MasterMenu> = {
            menuName: data.menuName,
            menuTooltip: data.menuTooltip,
            menuUrl: data.menuUrl,
            sequence: data.sequence,
        };
        return this.masterMenu.create(masterMenu);
    }

    async findAllMasterError(): Promise<MasterError[]> {
        return this.masterError.findAll();
    }
    async checkUserExistsByErrorCode(errorCode: string): Promise<boolean> {
        const data = await this.masterError.findOne({ where: { errorCode } });
        return !!data; // Returns true if user exists, false otherwise
    }

    async createError(data: Partial<MasterError>): Promise<MasterError> {
        // Create a Partial<User> object instead of a full User instance
        const masterError: Partial<MasterError> = {
            errorCode: data.errorCode,
            description: data.description,
            regex: data.regex,
            solution: data.solution,
        };
        return this.masterError.create(masterError);
    }


    async findAllMasterSegment(): Promise<MasterSegment[]> {
        return this.masterSegment.findAll();
    }
    async checkUserExistsBySegmentName(segmentName: string): Promise<boolean> {
        const data = await this.masterSegment.findOne({ where: { segmentName } });
        return !!data; // Returns true if user exists, false otherwise
    }

    async createSegment(data: Partial<MasterSegment>): Promise<MasterSegment> {
        // Create a Partial<User> object instead of a full User instance
        const masterSegment: Partial<MasterSegment> = {
            segmentName: data.segmentName
        };
        return this.masterSegment.create(masterSegment);
    }

}
