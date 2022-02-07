import { Quiz } from "../../entities/Quiz";
import { Answer } from "../../entities/Answer";
import { Question } from "../../entities/Question";
import { CreateQuizRepository } from "../../repositories/quizRepositories/CreateQuizRepository";
import { getRepository } from "typeorm";
import { Personality } from "../../entities/Personality";
import { CreateAnswerRepository } from "../../repositories/answerRepositories/CreateAnswerRepository";

export class CreateQuizService {
  execute = async (
    answers: Answer[]
  ): Promise<Quiz | Error> => {
    const createQuizRepository = new CreateQuizRepository();

    const createAnswerRepository = new CreateAnswerRepository();

    createAnswerRepository.execute(answers);

    const idAcronyms = await this.returnPersonality(answers);

    const [{ idPeople }] = answers;
    const active = true;

    const quiz = await createQuizRepository.execute({
      idPeople,
      idAcronyms,
      active,
    });

    return quiz;
  };

  returnPersonality = async (
    answers: Answer[]
  ): Promise<number> => {
    let totalAcronymPersonalities = 0;
    let counter = 1;
    let personalityAcronym = 0;
    let totalAnswers = 0;

    const repoPersonality = getRepository(Personality);
    const personalities = await repoPersonality.find();

    const repoQuestion = getRepository(Question);
    const questions = await repoQuestion.find();

    for (let i = 0; i < questions.length; i++) {
      if (
        personalities.find(
          (item) => item.idPrimeNumber === questions[i].idPersonality
        )
      ) {
        totalAnswers += answers[i].answer;
        if (counter == 5) {
          personalityAcronym = await this.#returnAcronym(
            totalAnswers,
            questions[i].idPersonality,
            (counter * 100) / 2
          );
          totalAcronymPersonalities += personalityAcronym;
          totalAnswers = 0;
          personalityAcronym = 0;
          counter = 0;
        }
        counter++;
      }
    }
    return totalAcronymPersonalities;
  };

  #returnAcronym = async (
    totalAnswers: number,
    personality: number,
    totalQuestions: number
  ): Promise<number> => {
    let primeNumber = 0;
    const repo = getRepository(Personality);
    const personalities = await repo.find();

    personalities.forEach((element, index, array) => {
      if (element.idPrimeNumber === personality) {
        if (personality > 10) {
          if (totalAnswers <= totalQuestions) {
            primeNumber = array[index].idPrimeNumber;
          } else {
            primeNumber = array[index - 1].idPrimeNumber;
          }
        } else {
          if (totalAnswers <= totalQuestions) {
            primeNumber = array[index].idPrimeNumber;
          } else {
            primeNumber = array[index + 1].idPrimeNumber;
          }
        }
      }
    });
    return primeNumber;
  };
}
