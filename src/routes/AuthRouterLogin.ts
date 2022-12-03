import express from 'express';
import {Login} from '../controller/AuthController'

 
//Router from express
const authRouterLogin = express.Router();

authRouterLogin.route('/')
     .post(Login)

 export default  authRouterLogin;
 
