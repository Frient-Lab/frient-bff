"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllQuestionService = void 0;
const GetAllQuestionRepository_1 = require("../../repositories/questionRepositories/GetAllQuestionRepository");
class GetAllQuestionService {
    constructor() {
        this.execute = async () => {
            const getAllRepository = new GetAllQuestionRepository_1.GetAllQuestionRepository();
            const questions = await getAllRepository.execute();
            return questions;
        };
    }
}
exports.GetAllQuestionService = GetAllQuestionService;
