import { Router } from 'express';

const router:Router=Router();

import {signin} from '../controllers/authcontroller';
import {signup} from '../controllers/authcontroller';
import {profile} from '../controllers/authcontroller';
import {updprofile} from '../controllers/authcontroller';
import {uservalidation} from '../controllers/authcontroller';
//import {updprofileimg} from '../controllers/authcontroller';
import multer from '../libs/multer';

router.post('/signup',signup);
router.post('/signin',signin);
import {tokenval} from'../libs/validateToken';
router.get('/profile',tokenval,profile);
//router.put('/profile',tokenval,multer.single('image'),updprofile);
router.put('/profile',tokenval,updprofile);

import {imageload} from '../controllers/authcontroller';
import {imagedownload} from '../controllers/authcontroller';
router.get('/img',imageload);
router.get('/image',imagedownload);
router.get('/confirm/:confirmationCode',uservalidation);
import {mq} from '../controllers/authcontroller';
router.get('/mq',mq);
export default router;