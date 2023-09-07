import { Router } from 'express';
import { deleteUser,
         getUsers,
         patchUser,
         postUser,
         putUser 
        } from '../controllers/user.js';

const router = Router();

router.get('/', getUsers);

router.put('/:id', putUser);

router.post('/', postUser);

router.delete('/', deleteUser);

router.patch('/', patchUser)



export default router;