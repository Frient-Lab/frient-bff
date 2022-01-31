import { getRepository } from "typeorm";
import { People } from "../../entities/People";

type PeopleRequest = {
  name: string;
  email: string;
  urlProfile: string;
  age: number;
  idGender: number;
  idSexualOrientation: number;
  idAddress: number;
  active: boolean;
};

export class CreatePeopleService {
  async execute({name, email, urlProfile, age, idGender, idSexualOrientation, idAddress, active}: PeopleRequest): Promise<People | Error> {
    const repo = getRepository(People);

    if (await repo.findOne({ email })) {
      return new Error("People alred exists");
    }

    const people = repo.create({name, email, urlProfile, age, idGender, idSexualOrientation, idAddress, active});

    await repo.save(people);

    return people;
  }
}