import { getRepository } from 'typeorm';
import { CreateUserDTO } from '../../data/dto/CreateUserDTO';
import { UserRepositoryInterface } from '../../data/interfaces/UserRepository';
import { User } from '../entities/User';
import { HttpResponse } from '../../data/models/HttpModel';

class UserRepository implements UserRepositoryInterface {
  private ormManager = getRepository(User)

  async create(data: CreateUserDTO): Promise<HttpResponse> {
    const res = await new HttpResponse(200, 'ok', {});
    return res;
  }
}

export default UserRepository;
