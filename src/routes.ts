import { Router } from "express";
import { CreatePeopleController } from "./controllers/peopleControllers/CreatePeopleController";
import { CreatePersonalityController } from "./controllers/personalityControllers/CreatePersonalityController";
import { CreateQuizController } from "./controllers/quizControllers/CreateQuizController";
import { GetQuizController } from "./controllers/quizControllers/GetQuizController";

const routes = Router();

routes.post("/quiz", new CreateQuizController().handle);
routes.post("/people", new CreatePeopleController().handle);
routes.post("/personality", new CreatePersonalityController().handle);
routes.get("/quiz/:id", new GetQuizController().handle);

export { routes };