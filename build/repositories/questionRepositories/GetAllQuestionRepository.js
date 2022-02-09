"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllQuestionRepository = void 0;
const typeorm_1 = require("typeorm");
const Question_1 = require("../../entities/Question");
class GetAllQuestionRepository {
    constructor() {
        this.execute = async () => {
            const repo = (0, typeorm_1.getRepository)(Question_1.Question);
            const questions = await repo.find();
            return questions;
        };
    }
}
exports.GetAllQuestionRepository = GetAllQuestionRepository;
