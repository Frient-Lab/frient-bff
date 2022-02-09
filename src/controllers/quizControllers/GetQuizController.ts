import { Request, Response } from "express";
import { GetQuizService } from "../../services/quizService/GetQuizService";

export class GetQuizController {
  async handle(request: Request, response: Response) {
    const {id} = request.params;
    const service = new GetQuizService();

    const idNumber = parseInt(id);

    const quiz = await service.execute(idNumber);

    return response.json(quiz);
  }
}