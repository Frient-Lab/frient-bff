import { Router } from "express";
import { CreatePeopleController } from "./controllers/peopleControllers/CreatePeopleController";
import { CreatePersonalityController } from "./controllers/personalityControllers/CreatePersonalityController";
import { GetAllPersonalityController } from "./controllers/personalityControllers/GetAllPersonalityController";
import { GetAllQuestionController } from "./controllers/questionControllers/GetAllQuestionController";
import { CreateQuizController } from "./controllers/quizControllers/CreateQuizController";
import { GetQuizController } from "./controllers/quizControllers/GetQuizController";

const routes = Router();

routes.post("/quiz", new CreateQuizController().handle);
routes.post("/people", new CreatePeopleController().handle);
routes.post("/personality", new CreatePersonalityController().handle);
routes.get("/quiz/:id", new GetQuizController().handle);

routes.get("/personality", new GetAllPersonalityController().handle);
routes.get("/question", new GetAllQuestionController().handle);

export { routes };