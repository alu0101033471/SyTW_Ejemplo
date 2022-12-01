import express, { Express, Request, Response } from "express";
import cors from 'cors';
import helmet from 'helmet';

import rootRouter from '../routes';


// Create Express APP
const server: Express = express();

// definir SERVER use "/api" y ejecute el rootRouter de index.ts en routes
//a apartir de ahora tenemos http://localhost:8000/api/...
server.use(
  '/api', rootRouter
  )

  //TODO Moongose Connection

  // Seguridad configuracion
  server.use(helmet());
  server.use(cors());

  //Tipo de contenidop a mostrar Content Type
  server.use(express.urlencoded({ extended: true, limit: '50mb' }))
  server.use(express.json({limit: '100mb'}));

  //Redirecciones
  //http://localhost:8000/ --> http://localhost:8000/api/
  server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
  });

  export default server;