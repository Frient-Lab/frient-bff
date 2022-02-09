"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPersonalityController = void 0;
const GetAllPersonalityService_1 = require("../../services/personalityService/GetAllPersonalityService");
class GetAllPersonalityController {
    async handle(request, response) {
        const service = new GetAllPersonalityService_1.GetAllPersonalityService();
        const result = await service.execute();
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.GetAllPersonalityController = GetAllPersonalityController;
