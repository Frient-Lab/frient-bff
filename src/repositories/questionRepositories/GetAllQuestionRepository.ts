import { getRepository } from "typeorm";
import { Question } from "../../entities/Question";

export class GetAllQuestionRepository {
  execute = async () : Promise<Question[] | Error> => {
    
    const repo = getRepository(Question);

    const questions = await repo.find();

    return questions;
  }
}