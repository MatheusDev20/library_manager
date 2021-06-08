import Router from 'express';
import { UserController } from '../../controllers/UserControler';

const userController = new UserController();
const userRoutes = Router();
userRoutes.post('/', userController.create);
userRoutes.get('/', (req, res) => {

});

export default userRoutes;
