 import express from 'express';
 import { Register } from '../controller/AuthController'

 //Router from express
 const authRouter = express.Router();

 authRouter.route('/')
     .post(Register)

 export default authRouter;

