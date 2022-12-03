/**
 * Root Router 
 * Encargado de redigir las direcciones
 */

import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import authRouterRegister from "./AuthRouter";
import authRouterLogin from "./AuthRouterLogin";
import { LogInfo } from "../utils/logger";

// Server instance
const server = express();

// Router instance
const rootRouter = express.Router();


// Activado por peticiones request a http://localhost:8000/api


// GET a http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('GET: http://localhost:8000/api/')
  //Enviar saludo
  res.send('APP Express + TS...');
});

//Redireciones a router 
server.use('/', rootRouter); // http://localhost:8000/api/
server.use('/hello', helloRouter); // http://localhost:8000/api/hello --> HelloRouter
server.use('/auth/register', authRouterRegister); // http://localhost:8000/api/auth/register --> AuthRouter
server.use('/auth/login', authRouterLogin); // http://localhost:8000/api/auth/register --> AuthRouter
//añadir mas routas a la app

export default server;