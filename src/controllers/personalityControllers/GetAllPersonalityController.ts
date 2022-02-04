import { Request, Response } from "express";
import { GetAllPersonalityService } from "../../services/personalityService/GetAllPersonalityService";

export class GetAllPersonalityController {
  async handle(request: Request, response: Response) {
    const service = new GetAllPersonalityService();

    const result = await service.execute();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}