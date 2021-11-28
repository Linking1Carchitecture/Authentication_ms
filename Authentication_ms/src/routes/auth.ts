import { Router } from 'express';

const router:Router=Router();

import {singin} from '../controllers/authcontroller';
import {singup} from '../controllers/authcontroller';
import {profile} from '../controllers/authcontroller';
import {updprofile} from '../controllers/authcontroller';

router.post('/singup',singup);
router.post('/singin',singin);
import {tokenval} from'../libs/validateToken';
router.get('/profile',tokenval,profile);
router.put('/profile',tokenval,updprofile);
export default router;