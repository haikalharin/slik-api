import {Body, Controller, Get, HttpStatus, Logger, Post, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/entities/jwt-auth.guard";
import {ResponseUtil} from "../utils/response.util";
import {ConfigurationService} from "./configuration.service";
import {RoleAccess} from "./entities/role-access.entity";

@Controller('config')
export class ConfigurationController {
    constructor(
        private configurationService: ConfigurationService,
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @Get('getAllRoleAccess')
    async getAllRoleAccess() {
        const roleAccess = await this.configurationService.findAllRoleAccess();

        try {
            return ResponseUtil.success(roleAccess);
        } catch (err) {
            return ResponseUtil.error(err, HttpStatus.BAD_REQUEST);

        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('createRoleAccess')
    async createCity(@Body() createCityDto: Partial<RoleAccess>) {
        try {
            Logger.log(createCityDto.roleAccessName);
            const listCity = await this.configurationService.findAllRoleAccess();
            if (listCity.length !== 0) {
                const cityExists = await this.configurationService.checkUserExistsByRoleAccessName(createCityDto.roleAccessName)
                if (cityExists) {
                    return ResponseUtil.error('User Exist', HttpStatus.CONFLICT);

                } else {
                    const city = await this.configurationService.createCity(createCityDto);
                    return ResponseUtil.success(city);
                }
            } else {
                const city = await this.configurationService.createCity(createCityDto);
                return ResponseUtil.success(city);


            }
        } catch (error) {
            return ResponseUtil.error(error, HttpStatus.BAD_REQUEST);

        }


    }


}
