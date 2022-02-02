import {Request, Response} from "express";
import { CreatePersonalityService } from "../../services/personalityService/CreatePersonalityService";

export class CreatePersonalityController {
  async handle(request: Request, response: Response) {
    const {idPrimeNumber, description, characteristics, active} = request.body;

    const service = new CreatePersonalityService();

    const result = await service.execute({idPrimeNumber, description, characteristics, active});

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}