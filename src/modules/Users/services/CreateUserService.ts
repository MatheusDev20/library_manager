import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../data/dto/CreateUserDTO';
import { IUserRepositoryInterface } from '../data/interfaces/IUserRepository';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepo')
    private usersRepository: IUserRepositoryInterface,
  ) { }

  public async execute({
    firstName, lastName, email, role, recoveryEmail, admin, avatar,
  }: ICreateUserDTO) {
    const userData = {
      firstName, lastName, email, role, recoveryEmail, admin, avatar,
    };
    this.usersRepository.create(userData);
  }
}
