"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuizService = void 0;
const typeorm_1 = require("typeorm");
const Quiz_1 = require("../../entities/Quiz");
class GetQuizService {
    async execute(id) {
        const repo = (0, typeorm_1.getRepository)(Quiz_1.Quiz);
        const quiz = await repo.findOne(id, {
            relations: ["people", "personality"],
        });
        return quiz;
    }
}
exports.GetQuizService = GetQuizService;
