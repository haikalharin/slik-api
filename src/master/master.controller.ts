import {Controller, Get, HttpStatus, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/entities/jwt-auth.guard";
import {User} from "../auth/entities/user.entity";
import {AuthService} from "../auth/auth.service";
import {UsersService} from "../users/users.service";
import {MasterService} from "./master.service";
import {MasterCity} from "./entities/master.city";
import {ResponseUtil} from "../utils/response.util";

@Controller('master')
export class MasterController {
    constructor(
        private masterService: MasterService,
    ) {
    }
    @UseGuards(JwtAuthGuard)
    @Get('getAllCity')
    async findAll() {
        const  masterCity =  await this.masterService.findAllMasterCity();

        try {
            return ResponseUtil.success(masterCity);
        }catch (err){
            return ResponseUtil.error(err, HttpStatus.BAD_REQUEST);

        }


        return
    }
}
