"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("./entities/user.entity");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
let AuthService = AuthService_1 = class AuthService {
    constructor(userModel, usersService, jwtService, configService) {
        this.userModel = userModel;
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async getDatabaseHost() {
        const nodeNew = this.configService.get('NODE_ENV');
        const taging = this.configService.get('DB_HOST');
        const dbUserName = this.configService.get('DB_USERNAME');
        const dbName = this.configService.get('DB_NAME');
        return `${nodeNew},${taging},${dbUserName},${dbName}`;
    }
    async signIn(username, pass) {
        const userExist = await this.usersService.checkUserExistsByUsername(username);
        if (userExist) {
            const user = await this.usersService.findOne(username);
            const isCorrect = await this.usersService.verifyMd5Hash(pass, user.password);
            if (!isCorrect) {
                return false;
            }
            const { ...result } = user;
            const payload = { username: result.username, sub: result.id };
            const token = this.jwtService.sign(payload);
            return { ...result, token };
        }
        else {
            return false;
        }
    }
    async createUser(data) {
        const pass = await this.usersService.amd5Hash(data.password);
        const userModel = {
            username: data.username,
            password: pass,
            email: data.email
        };
        return this.userModel.create(userModel);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map