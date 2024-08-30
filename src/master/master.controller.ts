import {Body, Controller, Get, HttpStatus, Logger, Post, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/entities/jwt-auth.guard";
import {User} from "../auth/entities/user.entity";
import {AuthService} from "../auth/auth.service";
import {UsersService} from "../users/users.service";
import {MasterService} from "./master.service";
import {MasterCity} from "./entities/master.city";
import {ResponseUtil} from "../utils/response.util";
import {MasterMenu} from "./entities/master.menu";
import {MasterError} from "./entities/master.error";
import {MasterSegment} from "./entities/master.segment";

@Controller('master')
export class MasterController {
    constructor(
        private masterService: MasterService,
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @Get('getAllCity')
    async getAllCity() {
        const masterCity = await this.masterService.findAllMasterCity();

        try {
            return ResponseUtil.success(masterCity);
        } catch (err) {
            return ResponseUtil.error(err, HttpStatus.BAD_REQUEST);

        }
    }
    @UseGuards(JwtAuthGuard)
    @Post('createCity')
    async createCity(@Body() createCityDto: Partial<MasterCity>) {
        // try {
        Logger.log(createCityDto.cityCode);
        const listCity = await this.masterService.findAllMasterCity();
        if (listCity.length !== 0) {
            const cityExists = await this.masterService.checkUserExistsByCityName(createCityDto.cityName)
            if (cityExists) {
                return ResponseUtil.error('User Exist', HttpStatus.CONFLICT);

            } else {
                const city = await this.masterService.createCity(createCityDto);
                return ResponseUtil.success(city);
            }
        } else {
            const city = await this.masterService.createCity(createCityDto);
            return ResponseUtil.success(city);


        }
        // }catch (error){
        //     return ResponseUtil.error('Invalid credentials', HttpStatus.BAD_REQUEST);
        //
        // }


    }


    @UseGuards(JwtAuthGuard)
    @Get('getAllMenu')
    async getAllMenu() {
        const masterMenu = await this.masterService.findAllMasterMenu();

        try {
            return ResponseUtil.success(masterMenu);
        } catch (err) {
            return ResponseUtil.error(err, HttpStatus.BAD_REQUEST);

        }
    }
    @UseGuards(JwtAuthGuard)
    @Post('createMenu')
    async createMenu(@Body() createMenuDto: Partial<MasterMenu>) {
        // try {
        Logger.log(createMenuDto.menuName);
        const listCity = await this.masterService.findAllMasterMenu();
        if (listCity.length !== 0) {
            const cityExists = await this.masterService.checkUserExistsByMenuName(createMenuDto.menuName)
            if (cityExists) {
                return ResponseUtil.error('User Exist', HttpStatus.CONFLICT);

            } else {
                const data = await this.masterService.createMenu(createMenuDto);
                return ResponseUtil.success(data);
            }
        } else {
            const data = await this.masterService.createMenu(createMenuDto);
            return ResponseUtil.success(data);


        }
        // }catch (error){
        //     return ResponseUtil.error('Invalid credentials', HttpStatus.BAD_REQUEST);
        //
        // }


    }
    @UseGuards(JwtAuthGuard)
    @Get('getAllError')
    async getAllError() {
        const masterErrors = await this.masterService.findAllMasterError();

        try {
            return ResponseUtil.success(masterErrors);
        } catch (err) {
            return ResponseUtil.error(err, HttpStatus.BAD_REQUEST);

        }
    }
    @UseGuards(JwtAuthGuard)
    @Post('createError')
    async createError(@Body() createErrorDto: Partial<MasterError>) {
        // try {
        Logger.log(createErrorDto.errorCode);
        const listCity = await this.masterService.findAllMasterError();
        if (listCity.length !== 0) {
            const cityExists = await this.masterService.checkUserExistsByErrorCode(createErrorDto.errorCode)
            if (cityExists) {
                return ResponseUtil.error('User Exist', HttpStatus.CONFLICT);

            } else {
                const data = await this.masterService.createError(createErrorDto);
                return ResponseUtil.success(data);
            }
        } else {
            const data = await this.masterService.createError(createErrorDto);
            return ResponseUtil.success(data);


        }
        // }catch (error){
        //     return ResponseUtil.error('Invalid credentials', HttpStatus.BAD_REQUEST);
        //
        // }


    }

    @UseGuards(JwtAuthGuard)
    @Get('getAllSegment')
    async getAllSegment() {
        const masterSegments = await this.masterService.findAllMasterSegment();

        try {
            return ResponseUtil.success(masterSegments);
        } catch (err) {
            return ResponseUtil.error(err, HttpStatus.BAD_REQUEST);

        }
    }
    @UseGuards(JwtAuthGuard)
    @Post('createSegment')
    async createSegment(@Body() createSegmentDto: Partial<MasterSegment>) {
        // try {
        Logger.log(createSegmentDto.segmentName);
        const listCity = await this.masterService.findAllMasterSegment();
        if (listCity.length !== 0) {
            const cityExists = await this.masterService.checkUserExistsBySegmentName(createSegmentDto.segmentName)
            if (cityExists) {
                return ResponseUtil.error('User Exist', HttpStatus.CONFLICT);

            } else {
                const data = await this.masterService.createSegment(createSegmentDto);
                return ResponseUtil.success(data);
            }
        } else {
            const data = await this.masterService.createSegment(createSegmentDto);
            return ResponseUtil.success(data);


        }
        // }catch (segment){
        //     return ResponseUtil.segment('Invalid credentials', HttpStatus.BAD_REQUEST);
        //
        // }


    }

}
