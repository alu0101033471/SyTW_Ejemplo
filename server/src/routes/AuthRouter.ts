import express from 'express';
import auth from '../controller/AuthController'

 
//Router from express
const authRouterRegister = express.Router();

authRouterRegister.route('/')
     .post(auth.Register)

 export default authRouterRegister;
 
