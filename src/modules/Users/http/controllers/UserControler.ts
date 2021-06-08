import { Request, response, Response } from 'express';
import { container } from 'tsyringe';
import { HttpResponse } from '../../../../domain/models/HttpModel';
import { CreateUserService } from '../../services/CreateUserService';

class UserController {
  public async create(req: Request, res: Response): Promise<Response<HttpResponse>> {
    const {
      firstName, lastName, email, recoveryEmail, role,
    } = req.body;
    const admin = false;
    const userData = {
      firstName,
      lastName,
      email,
      recoveryEmail,
      role,
      admin,
    };
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute(userData);

    const httpResponse = new HttpResponse(201, 'User Succesfully Created', user);

    return res.json(httpResponse);
  }
}

export { UserController };
