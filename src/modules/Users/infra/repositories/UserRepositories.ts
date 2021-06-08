import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../data/dto/CreateUserDTO';
import { IUserRepositoryInterface } from '../../data/interfaces/IUserRepository';
import { User } from '../entities/User';

class UserRepository implements IUserRepositoryInterface {
  private ormManager: Repository<User>

  constructor() {
    this.ormManager = getRepository(User);
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = await this.ormManager.create(userData);

    await this.ormManager.save(userData);
    return user;
  }
}

export default UserRepository;
