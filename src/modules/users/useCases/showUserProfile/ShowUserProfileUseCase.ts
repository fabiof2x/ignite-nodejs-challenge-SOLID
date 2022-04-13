import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const isUserFound = this.usersRepository.findById(user_id);

    if (!isUserFound) {
      throw new Error("User doesn't exist!");
    }

    return isUserFound;
  }
}

export { ShowUserProfileUseCase };
