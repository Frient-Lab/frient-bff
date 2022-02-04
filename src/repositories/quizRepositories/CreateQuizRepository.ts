import { getRepository } from "typeorm";
import { Quiz } from "../../entities/Quiz";


type QuizRequest = {
  idPeople: number;
  idAcronyms: number;
  active: boolean;
};

export class CreateQuizRepository {
  execute = async ({
    idPeople,
    idAcronyms,
    active,
  }: QuizRequest): Promise<Quiz | Error> => {
    const repo = getRepository(Quiz);

    const quiz = repo.create({ idPeople, idAcronyms, active });

    await repo.save(quiz);

    return quiz;
  }
}