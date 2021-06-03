import Router from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from '../../../services/CreateUserService';

const userRoutes = Router();
userRoutes.post('/', (req, res) => {
  const userService = container.resolve(CreateUserService);
  userService.execute(req.body);

  return res.send('ok');
});

userRoutes.get('/', (req, res) => {

});

export default userRoutes;
