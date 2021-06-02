import { CreateUserDTO } from '../dto/CreateUserDTO';

export interface UserRepositoryInterface {
  create(data: CreateUserDTO): Promise<any>
}
