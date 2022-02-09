"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPersonalityService = void 0;
const GetAllPersonalityRepository_1 = require("../../repositories/personalityRepositories/GetAllPersonalityRepository");
class GetAllPersonalityService {
    constructor() {
        this.execute = async () => {
            const getAllRepository = new GetAllPersonalityRepository_1.GetAllPersonalityRepository();
            const personalities = await getAllRepository.execute();
            return personalities;
        };
    }
}
exports.GetAllPersonalityService = GetAllPersonalityService;
