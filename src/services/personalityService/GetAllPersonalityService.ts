import { GetAllPersonalityRepository } from "../../repositories/personalityRepositories/GetAllPersonalityRepository";
import { Personality } from "../../entities/Personality";

export class GetAllPersonalityService {
  execute = async () : Promise<Personality[]> => {
    
    const getAllRepository = new GetAllPersonalityRepository();

    const personalities = await getAllRepository.execute();

    return personalities;
  };
}
