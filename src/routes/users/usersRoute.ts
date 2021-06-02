import Router from 'express';
import { UserController } from '../../presenters/controllers/UserControler';

const userRoutes = Router();
const userController = new UserController();
userRoutes.post('/', userController.create);

export default userRoutes;
