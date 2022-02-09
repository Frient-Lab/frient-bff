"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonalityService = void 0;
const typeorm_1 = require("typeorm");
const Personality_1 = require("../../entities/Personality");
class CreatePersonalityService {
    async execute({ idPrimeNumber, description, characteristics, active }) {
        const repo = (0, typeorm_1.getRepository)(Personality_1.Personality);
        if (await repo.findOne({ description })) {
            return new Error("Personality alred exists");
        }
        const people = repo.create({ idPrimeNumber, description, characteristics, active });
        await repo.save(people);
        return people;
    }
}
exports.CreatePersonalityService = CreatePersonalityService;
