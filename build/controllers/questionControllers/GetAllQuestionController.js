"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllQuestionController = void 0;
const GetAllQuestionService_1 = require("../../services/questionService/GetAllQuestionService");
class GetAllQuestionController {
    async handle(request, response) {
        const service = new GetAllQuestionService_1.GetAllQuestionService();
        const result = await service.execute();
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.GetAllQuestionController = GetAllQuestionController;
