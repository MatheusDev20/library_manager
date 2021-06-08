import { ICreateUserDTO } from '../dto/CreateUserDTO';

export interface IUserRepositoryInterface {
  create(data: ICreateUserDTO): Promise<any>
}
