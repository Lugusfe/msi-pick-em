import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import RiotApiController from './controllers/RiotApiController';

const router = Router()

router.post('/users', UserController.create)
router.post('/session', SessionController.create)
router.post('/api', RiotApiController.create)

export default router

