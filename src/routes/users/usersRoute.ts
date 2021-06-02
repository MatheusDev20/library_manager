import Router from 'express';
import { UserController } from '../../presenters/controllers/UserControler';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.create);

userRoutes.get('/', (req, res) => {
  res.json({ message: 'Hello World' }).send();
});

export default userRoutes;
