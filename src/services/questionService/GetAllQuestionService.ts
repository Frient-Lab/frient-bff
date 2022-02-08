import { Question } from "../../entities/Question";
import { GetAllQuestionRepository } from "../../repositories/questionRepositories/GetAllQuestionRepository";

export class GetAllQuestionService {
  execute = async () : Promise<Question[]> => {
    
    const getAllRepository = new GetAllQuestionRepository();

    const questions = await getAllRepository.execute();

    return questions;
  };
}
