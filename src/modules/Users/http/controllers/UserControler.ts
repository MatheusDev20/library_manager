import { Request, Response } from 'express';
import { HttpResponse } from '../../../../domain/models/HttpModel';
import { RegisterUserUseCase } from '../../../../domain/useCases/RegisterUser';

class UserController {
  private registerUser: RegisterUserUseCase

  constructor(registerUserUseCase: RegisterUserUseCase) {
    this.registerUser = registerUserUseCase;
  }

  public async create(req: Request, res: Response): Promise<HttpResponse> {
    const resUser = this.registerUser.register(req.body);
    console.log(resUser);
    return new HttpResponse(200, 'TESTE', {});
  }
}

export { UserController };
