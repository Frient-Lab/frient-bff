import {Request, Response} from "express";
import { CreateQuizService } from "../../services/quizService/CreateQuizService";

export class CreateQuizController {
  async handle(request: Request, response: Response) {
    const {idPeople, idPersonality, active} = request.body;

    const service = new CreateQuizService();

    const result = await service.execute({idPeople, idPersonality, active});

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}