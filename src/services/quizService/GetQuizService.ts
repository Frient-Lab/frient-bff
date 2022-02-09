import { getRepository } from "typeorm";
import { Quiz } from "../../entities/Quiz";


export class GetQuizService {
  async execute(id: number) {
    const repo = getRepository(Quiz);

    const quiz = await repo.findOne(id,{
      relations: ["people","personality"],
      
    });

    return quiz;
  }
}