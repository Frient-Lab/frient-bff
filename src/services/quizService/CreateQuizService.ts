import { Quiz } from "../../entities/Quiz";
import { Answer } from "../../entities/Answer";
import { Question } from "../../entities/Question";
import { CreateQuizRepository } from "../../repositories/quizRepository/CreateQuizRepository";

export class CreateQuizService {
  execute = async (
    questions: Question[],
    answers: Answer[]
  ): Promise<Quiz | Error> => {
    
    const createRepository = new CreateQuizRepository();

    const idAcronyms = this.returnPersonality(questions, answers);

    const [{ idPeople }] = answers;
    const active = true;

    const quiz = await createRepository.execute({ idPeople, idAcronyms, active });

    return quiz;
  };

  returnPersonality = (questions: Question[], answers: Answer[]): number => {
    let totalAcronymPersonalities = 0;
    let counter = 1;
    let personalityAcronym = 0;
    let totalAnswers = 0;
    const mainPersonalities: number[] = [1, 3, 5, 7];

    for (let i = 0; i < questions.length; i++) {
      if (mainPersonalities.includes(questions[i].idPersonality)) {
        totalAnswers += answers[i].answer;
        if (counter == 5) {
          personalityAcronym = this.#returnAcronym(
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

  #returnAcronym = (
    totalAnswers: number,
    personality: number,
    totalQuestions: number
  ): number => {
    const personalities: number[] = [1, 17, 3, 31, 5, 37, 7, 41];

    for (let i = 0; i < personalities.length; i++) {
      if (personalities[i] == personality) {
        if (totalAnswers <= totalQuestions) {
          return personalities[i];
        } else {
          return personalities[i + 1];
        }
      }
    }
    return 0;
  };
}
