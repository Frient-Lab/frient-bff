"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonalityController = void 0;
const CreatePersonalityService_1 = require("../../services/personalityService/CreatePersonalityService");
class CreatePersonalityController {
    async handle(request, response) {
        const { idPrimeNumber, description, characteristics, active } = request.body;
        const service = new CreatePersonalityService_1.CreatePersonalityService();
        const result = await service.execute({ idPrimeNumber, description, characteristics, active });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreatePersonalityController = CreatePersonalityController;
