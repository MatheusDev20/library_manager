import { container } from 'tsyringe';

import { IUserRepositoryInterface } from '../../modules/Users/data/interfaces/IUserRepository';
import UserRepository from '../../modules/Users/infra/repositories/UserRepositories';

container.registerSingleton<IUserRepositoryInterface>('UserRepo', UserRepository);
