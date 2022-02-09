"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePeopleService = void 0;
const typeorm_1 = require("typeorm");
const People_1 = require("../../entities/People");
class CreatePeopleService {
    async execute({ name, email, urlProfile, age, idGender, idSexualOrientation, idAddress, active }) {
        const repo = (0, typeorm_1.getRepository)(People_1.People);
        if (await repo.findOne({ email })) {
            return new Error("People alred exists");
        }
        const people = repo.create({ name, email, urlProfile, age, idGender, idSexualOrientation, idAddress, active });
        await repo.save(people);
        return people;
    }
}
exports.CreatePeopleService = CreatePeopleService;
