"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuizController = void 0;
const CreateQuizService_1 = require("../../services/quizService/CreateQuizService");
class CreateQuizController {
    async handle(request, response) {
        const service = new CreateQuizService_1.CreateQuizService();
        const { answers } = request.body;
        const result = await service.execute(answers);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreateQuizController = CreateQuizController;
