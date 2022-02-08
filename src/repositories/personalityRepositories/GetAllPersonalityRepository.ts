import { getRepository } from "typeorm";
import { Personality } from "../../entities/Personality";

export class GetAllPersonalityRepository {
  execute = async () : Promise<Personality[]> => {
    
    const repo = getRepository(Personality);

    const personalities = await repo.find();

    return personalities;
  }
}