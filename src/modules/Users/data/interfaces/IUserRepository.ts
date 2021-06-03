import { CreateUserDTO } from '../dto/CreateUserDTO';

export interface IUserRepositoryInterface {
  create(data: CreateUserDTO): Promise<any>
}
