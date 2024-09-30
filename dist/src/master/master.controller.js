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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/entities/jwt-auth.guard");
const master_service_1 = require("./master.service");
const response_util_1 = require("../utils/response.util");
let MasterController = class MasterController {
    constructor(masterService) {
        this.masterService = masterService;
    }
    async findAll() {
        const masterCity = await this.masterService.findAllMasterCity();
        try {
            return response_util_1.ResponseUtil.success(masterCity);
        }
        catch (err) {
            return response_util_1.ResponseUtil.error(err, common_1.HttpStatus.BAD_REQUEST);
        }
        return;
    }
};
exports.MasterController = MasterController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getAllCity'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MasterController.prototype, "findAll", null);
exports.MasterController = MasterController = __decorate([
    (0, common_1.Controller)('master'),
    __metadata("design:paramtypes", [master_service_1.MasterService])
], MasterController);
//# sourceMappingURL=master.controller.js.map