import { Request, Response } from "express";
import { GetAllQuestionService } from "../../services/questionService/GetAllQuestionService";

export class GetAllQuestionController {
  async handle(request: Request, response: Response) {
    const service = new GetAllQuestionService();

    const result = await service.execute();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}