// 3rd dependencies
import { Router, Request, Response } from 'express';
const userRouter = Router();

// Middleware

// Controller
import { userController } from './../../controllers/user.Controller';

//-------------------------------------------- api/user/... -------------------------------

//--------------------------------------------GET------------------------------------------
userRouter.get('/login', userController.login);
userRouter.get('/send-otp', userController.sendOTP);

//--------------------------------------------POST-----------------------------------------
userRouter.get('/register', userController.register);

//--------------------------------------------PUT------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export default userRouter;
