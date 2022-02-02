import { getRepository } from "typeorm";
import { Personality } from "../../entities/Personality";

type PersonalityRequest = {
  idPrimeNumber: number;
  description : string;
  characteristics : string;
  active: boolean;
};

export class CreatePersonalityService {
  async execute({idPrimeNumber, description, characteristics, active}: PersonalityRequest): Promise<Personality | Error> {
    const repo = getRepository(Personality);

    if (await repo.findOne({ description })) {
      return new Error("Personality alred exists");
    }

    const people = repo.create({idPrimeNumber, description, characteristics, active});

    await repo.save(people);

    return people;
  }
}