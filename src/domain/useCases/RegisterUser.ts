import { CreateUserDTO } from '../../modules/Users/data/dto/CreateUserDTO';
import { HttpResponse } from '../models/HttpModel';

export interface RegisterUserUseCase {
  register(userData: CreateUserDTO): Promise<HttpResponse>
}
