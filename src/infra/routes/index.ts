import Router from 'express';
import userRoutes from '../../modules/Users/http/routes/users/usersRoute';

const router = Router();

router.use('/users', userRoutes);

export default router;
