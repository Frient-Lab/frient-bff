import {Request, Response} from "express";
import { CreatePeopleService } from "../../services/peopleService/CreatePeopleService";

export class CreatePeopleController {
  async handle(request: Request, response: Response) {
    const {name, email, urlProfile, age, idGender, idSexualOrientation, idAddress, active} = request.body;

    const service = new CreatePeopleService();

    const result = await service.execute({name, email, urlProfile, age, idGender, idSexualOrientation, idAddress, active});

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}