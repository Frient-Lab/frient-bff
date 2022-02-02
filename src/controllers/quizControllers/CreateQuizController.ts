import {Request, Response} from "express";
import { Answer } from "../../entities/Answer";
import { Question } from "../../entities/Question";
import { CreateQuizService } from "../../services/quizService/CreateQuizService";

export class CreateQuizController {
  static totalrespostas = 0;
  static personalidaSigla = 0;

  async handle(request: Request, response: Response) {
    const {questions, answers} = request.body;

    const listQuestion:Question[] = questions;
    const listAnswers:Answer[] = answers;

    const idAcronyms = CreateQuizController.retornPersonality(listQuestion, listAnswers);
    
    const [{idPeople}] = listAnswers;
    const active = true;

    const service = new CreateQuizService();

    const result = await service.execute({idPeople, idAcronyms, active});

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  static retornPersonality(questions:Question[],answers:Answer[]) {
    let totalSiglaPersonalidades = 0;
    let contador = 1;
    const personalidadesPrincipais: number[] = [1, 3, 5, 7];

    for (let i = 0; i < questions.length; i++)
      {
        for (let p = 0; p < personalidadesPrincipais.length; p++)
        {
          if (questions[i].idPersonality == personalidadesPrincipais[p])
          {
            CreateQuizController.somaRespostas(answers[i].answer);
            if (contador == 5)
            { 
              CreateQuizController.personalidaSigla = CreateQuizController.retornaSigla(CreateQuizController.totalrespostas, personalidadesPrincipais[p]);
              totalSiglaPersonalidades += CreateQuizController.personalidaSigla;
              CreateQuizController.totalrespostas = 0;
              CreateQuizController.personalidaSigla = 0;
              contador = 0;
            }
            contador++;
            break;
          }
        }
     }
     return totalSiglaPersonalidades;
  }

  static somaRespostas(answers:number) {
    CreateQuizController.totalrespostas += answers;
  }

  static retornaSigla(totalrespostas:number, personalidade:number) {
    const personalidades: number[] = [1, 17, 3, 31, 5, 37, 7, 41];

    for (let i = 0; i < personalidades.length; i++)
    {
      if (personalidades[i] == personalidade)
      {
        if (totalrespostas <= 250)
        {
          return personalidades[i];
        }
        else
        {
          return personalidades[i+1];
        }
      }
    }
    return 0;
  }
}