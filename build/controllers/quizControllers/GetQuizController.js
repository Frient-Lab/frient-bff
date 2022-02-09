"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuizController = void 0;
const GetQuizService_1 = require("../../services/quizService/GetQuizService");
class GetQuizController {
    async handle(request, response) {
        const { id } = request.params;
        const service = new GetQuizService_1.GetQuizService();
        const idNumber = parseInt(id);
        const quiz = await service.execute(idNumber);
        return response.json(quiz);
    }
}
exports.GetQuizController = GetQuizController;
