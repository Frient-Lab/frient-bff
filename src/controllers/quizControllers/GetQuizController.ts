import { Request, Response } from "express";
import { GetQuizService } from "../../services/quizService/GetQuizService";

export class GetQuizController {
  async handle(request: Request, response: Response) {
    const {id} = request.params;
    const service = new GetQuizService();

    const quiz = await service.execute({id});

    return response.json(quiz);
  }
}