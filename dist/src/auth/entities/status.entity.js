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
exports.Status = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Status = class Status extends sequelize_typescript_1.Model {
};
exports.Status = Status;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Status.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Status.prototype, "martial", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Status.prototype, "religion", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Status.prototype, "company", void 0);
exports.Status = Status = __decorate([
    sequelize_typescript_1.Table
], Status);
//# sourceMappingURL=status.entity.js.map