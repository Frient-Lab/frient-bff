"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPersonalityRepository = void 0;
const typeorm_1 = require("typeorm");
const Personality_1 = require("../../entities/Personality");
class GetAllPersonalityRepository {
    constructor() {
        this.execute = async () => {
            const repo = (0, typeorm_1.getRepository)(Personality_1.Personality);
            const personalities = await repo.find();
            return personalities;
        };
    }
}
exports.GetAllPersonalityRepository = GetAllPersonalityRepository;
