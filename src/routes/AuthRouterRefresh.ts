import express from 'express';
import auth from '../controller/AuthController'

 
//Router from express
const authRouterRefresh = express.Router();

authRouterRefresh.route('/')
     .post(auth.RefreshAccessToken)

 export default authRouterRefresh;