import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isFoundUser = this.usersRepository.findById(user_id);

    if (!isFoundUser) {
      throw new Error("User does't exist!");
    }

    if (!isFoundUser.admin) {
      throw new Error("User isn't an admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
