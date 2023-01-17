import { Router } from 'express';
import userRegister from './userRegister.js';
import userGetAll from './userGetAll.js';
import userGetById from './userGetById.js';
import userUpdateById from './userUpdateById.js';
import userDeleteById from './userDeleteById.js';
import userDeleteAll from './userDeleteAll.js';



const router = Router();

router.post('/', userRegister);
router.get('/', userGetAll);
router.get('/:userId', userGetById);
router.patch('/:userId', userUpdateById);
router.delete('/:userId', userDeleteById);
router.delete('/', userDeleteAll);
export default router;

