import express from 'express';
import { Register} from '../controller/AuthController'

 
//Router from express
const authRouterRegister = express.Router();

authRouterRegister.route('/')
     .post(Register)

 export default authRouterRegister;
 
