import { Router } from 'express';
import authController from '../controllers/authController.js';
import signUpSchema from '../validators/signUpValidator.js';
import dataValidator from '../middlewares/dataValidator.js';
import emailValidator from '../middlewares/emailValidator.js';
import signInSchema from '../validators/signInValidator.js';
import passport from '../middlewares/passport.js';

const authRouter = Router()

const { signUp, signIn, loginWithToken } = authController

authRouter.get('/', dataValidator(signInSchema), signIn)
authRouter.post('/', dataValidator(signUpSchema), emailValidator, signUp)
authRouter.get('/token', passport.authenticate( 'jwt', { session:false } ), loginWithToken)

export default authRouter