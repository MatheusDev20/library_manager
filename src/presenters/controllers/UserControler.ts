import { Request, Response } from 'express';

class UserController {
  public create(req: Request, res: Response) {
    console.log(req.body);
  }
}

export { UserController };
