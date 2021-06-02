import Router from 'express';
import userRoutes from './users/usersRoute';

const router = Router();

router.use('/users', userRoutes);

export default router;
