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
var MasterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const master_city_1 = require("./entities/master.city");
let MasterService = MasterService_1 = class MasterService {
    constructor(masterCity) {
        this.masterCity = masterCity;
        this.logger = new common_1.Logger(MasterService_1.name);
    }
    async findAllMasterCity() {
        return this.masterCity.findAll();
    }
};
exports.MasterService = MasterService;
exports.MasterService = MasterService = MasterService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(master_city_1.MasterCity)),
    __metadata("design:paramtypes", [Object])
], MasterService);
//# sourceMappingURL=master.service.js.map