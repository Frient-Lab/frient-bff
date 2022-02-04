import { getRepository } from "typeorm";
import { Answer } from "../../entities/Answer";

export class CreateAnswerRepository {
  execute = async (answers: Answer[]): Promise<void> => {
    const repo = getRepository(Answer);

    const answer = repo.create(answers);

    await repo.save(answer);
  }
}