"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePeopleController = void 0;
const CreatePeopleService_1 = require("../../services/peopleService/CreatePeopleService");
class CreatePeopleController {
    async handle(request, response) {
        const { name, email, urlProfile, age, idGender, idSexualOrientation, idAddress, active } = request.body;
        const service = new CreatePeopleService_1.CreatePeopleService();
        const result = await service.execute({ name, email, urlProfile, age, idGender, idSexualOrientation, idAddress, active });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreatePeopleController = CreatePeopleController;
