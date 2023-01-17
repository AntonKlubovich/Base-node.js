import { Router } from 'express';
import info from './info.js';
import userRegister from '../user/userRegister.js';


const router = Router();

router.post('/', userRegister);
router.get('/', info);
export default router;