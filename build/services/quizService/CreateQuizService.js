"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CreateQuizService_returnAcronym;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuizService = void 0;
const CreateQuizRepository_1 = require("../../repositories/quizRepositories/CreateQuizRepository");
const typeorm_1 = require("typeorm");
const Personality_1 = require("../../entities/Personality");
const CreateAnswerRepository_1 = require("../../repositories/answerRepositories/CreateAnswerRepository");
const GetAllPersonalityRepository_1 = require("../../repositories/personalityRepositories/GetAllPersonalityRepository");
const GetAllQuestionRepository_1 = require("../../repositories/questionRepositories/GetAllQuestionRepository");
class CreateQuizService {
    constructor() {
        this.execute = async (answers) => {
            const createQuizRepository = new CreateQuizRepository_1.CreateQuizRepository();
            const createAnswerRepository = new CreateAnswerRepository_1.CreateAnswerRepository();
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
        this.returnPersonality = async (answers) => {
            let totalAcronymPersonalities = 0;
            let counter = 1;
            let personalityAcronym = 0;
            let totalAnswers = 0;
            const getAllRepository = new GetAllPersonalityRepository_1.GetAllPersonalityRepository();
            const personalities = await getAllRepository.execute();
            const getAllQuestionRepository = new GetAllQuestionRepository_1.GetAllQuestionRepository();
            const questions = await getAllQuestionRepository.execute();
            for (let i = 0; i < questions.length; i++) {
                if (personalities.find((item) => item.idPrimeNumber === questions[i].idPersonality)) {
                    totalAnswers += answers[i].answer;
                    if (counter == 5) {
                        personalityAcronym = await __classPrivateFieldGet(this, _CreateQuizService_returnAcronym, "f").call(this, totalAnswers, questions[i].idPersonality, (counter * 100) / 2);
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
        _CreateQuizService_returnAcronym.set(this, async (totalAnswers, personality, totalQuestions) => {
            let primeNumber = 0;
            const repo = (0, typeorm_1.getRepository)(Personality_1.Personality);
            const personalities = await repo.find();
            personalities.forEach((element, index, array) => {
                if (element.idPrimeNumber === personality) {
                    if (personality > 10) {
                        if (totalAnswers <= totalQuestions) {
                            primeNumber = array[index].idPrimeNumber;
                        }
                        else {
                            primeNumber = array[index - 1].idPrimeNumber;
                        }
                    }
                    else {
                        if (totalAnswers <= totalQuestions) {
                            primeNumber = array[index].idPrimeNumber;
                        }
                        else {
                            primeNumber = array[index + 1].idPrimeNumber;
                        }
                    }
                }
            });
            return primeNumber;
        });
    }
}
exports.CreateQuizService = CreateQuizService;
_CreateQuizService_returnAcronym = new WeakMap();
