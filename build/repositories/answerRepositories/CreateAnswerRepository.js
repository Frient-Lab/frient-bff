"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnswerRepository = void 0;
const typeorm_1 = require("typeorm");
const Answer_1 = require("../../entities/Answer");
class CreateAnswerRepository {
    constructor() {
        this.execute = async (answers) => {
            const repo = (0, typeorm_1.getRepository)(Answer_1.Answer);
            const answer = repo.create(answers);
            await repo.save(answer);
        };
    }
}
exports.CreateAnswerRepository = CreateAnswerRepository;
