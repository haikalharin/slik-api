"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const auth_controller_1 = require("./auth/auth.controller");
const auth_service_1 = require("./auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const master_module_1 = require("./master/master.module");
const master_controller_1 = require("./master/master.controller");
const master_service_1 = require("./master/master.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.env.${process.env.NODE_ENV}` || '.env',
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                autoLoadModels: true,
                synchronize: true,
            }),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '60m' },
            }),
            auth_module_1.AuthModule,
            users_module_1.UserModule,
            master_module_1.MasterModule
        ],
        controllers: [app_controller_1.AppController, auth_controller_1.AuthController, master_controller_1.MasterController],
        providers: [app_service_1.AppService, auth_service_1.AuthService, master_service_1.MasterService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map