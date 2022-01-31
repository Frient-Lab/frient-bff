import { getRepository } from "typeorm";
import { Quiz } from "../../entities/Quiz";

type QuizRequest = {
  idPeople: number;
  idPersonality: number;
  active: boolean;
};

export class CreateQuizService {
  async execute({idPeople, idPersonality, active}: QuizRequest): Promise<Quiz | Error> {
    const repo = getRepository(Quiz);

    const quiz = repo.create({idPeople, idPersonality, active});

    await repo.save(quiz);

    return quiz;
  }
}