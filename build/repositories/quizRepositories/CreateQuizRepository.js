"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuizRepository = void 0;
const typeorm_1 = require("typeorm");
const Quiz_1 = require("../../entities/Quiz");
class CreateQuizRepository {
    constructor() {
        this.execute = async ({ idPeople, idAcronyms, active, }) => {
            const repo = (0, typeorm_1.getRepository)(Quiz_1.Quiz);
            const quiz = repo.create({ idPeople, idAcronyms, active });
            await repo.save(quiz);
            return quiz;
        };
    }
}
exports.CreateQuizRepository = CreateQuizRepository;
