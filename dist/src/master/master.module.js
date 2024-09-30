"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const master_city_1 = require("./entities/master.city");
const master_service_1 = require("./master.service");
const config_1 = require("@nestjs/config");
let MasterModule = class MasterModule {
};
exports.MasterModule = MasterModule;
exports.MasterModule = MasterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forFeature([master_city_1.MasterCity])
        ],
        providers: [master_service_1.MasterService],
        exports: [master_service_1.MasterService, sequelize_1.SequelizeModule.forFeature([master_city_1.MasterCity])],
    })
], MasterModule);
//# sourceMappingURL=master.module.js.map