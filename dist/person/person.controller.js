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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const create_person_dto_1 = require("./dto/create-person.dto");
let PersonController = exports.PersonController = class PersonController {
    constructor() { }
    query(name, age) {
        return `received: name=${name},age=${age}`;
    }
    urlParam(id) {
        return `received: id=${id}`;
    }
    body(createPersonDto) {
        return `received: ${JSON.stringify(createPersonDto)}`;
    }
    body2(createPersonDto, files) {
        console.log(files);
        return `received: ${JSON.stringify(createPersonDto)}`;
    }
};
__decorate([
    (0, common_1.Get)('find'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('age')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "query", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "urlParam", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_dto_1.CreatePersonDto]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "body", null);
__decorate([
    (0, common_1.Post)('file'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        dest: 'uploads/',
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_dto_1.CreatePersonDto,
        Array]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "body2", null);
exports.PersonController = PersonController = __decorate([
    (0, common_1.Controller)('api/person'),
    __metadata("design:paramtypes", [])
], PersonController);
//# sourceMappingURL=person.controller.js.map