import { Request, Response } from "express";
import { CreateQuizService } from "../../services/quizService/CreateQuizService";

export class CreateQuizController {
  async handle(request: Request, response: Response) {
    const service = new CreateQuizService();

    const { answers } = request.body;

    const result = await service.execute(answers);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}