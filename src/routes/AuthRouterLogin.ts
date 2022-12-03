import express from 'express';
import auth from '../controller/AuthController'

 
//Router from express
const authRouterLogin = express.Router();

authRouterLogin.route('/')
     .post(auth.Login)

 export default  authRouterLogin;
 
