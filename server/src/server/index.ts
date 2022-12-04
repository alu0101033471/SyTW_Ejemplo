import express, { Express, Request, Response } from "express";
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from "mongoose";

import rootRouter from '../routes';


dotenv.config();

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_uri = process.env.DB_URI;


// Create Express APP
const server: Express = express();

// * Swagger Configuracion y ruta

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

// definir SERVER use "/api" y ejecute el rootRouter de index.ts en routes
//a apartir de ahora tenemos http://localhost:8000/api/...
server.use(
  '/api', rootRouter
  );

//server.use( '/admin', rootRouter);

//Configuracion de la carpeta de estáticos
// * OPcion del pingu -> server.use(express.static("../uploads"));
server.use(express.static("public"));

//TODO Moongose Connection
mongoose.connect(
  `mongodb+srv://${db_user}:${db_pass}@${db_uri}`,
  (error) => {
    if(error) throw error;
    
    console.log("Conexión con MONGO ATLAS SIUU");
  }
);
  //Swagger para documentación
  //import swaggerUi from 'swagger-ui-express';

  // Seguridad configuracion
server.use(helmet());
  //server.use( cors({ origin: true, credentials: true  }) );
  //server.use(cors<Request>());
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });
server.use(cors());

  /*const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};*/

// Then pass these options to cors:
//server.use(cors(options));

  //Configuracion de los routings
  //server.use()

  //Tipo de contenidop a mostrar Content Type
  server.use(express.urlencoded({ extended: true, limit: '50mb' }))
  server.use(express.json({limit: '100mb'}));

  //Redirecciones
  //http://localhost:8000/ --> http://localhost:8000/api/
  server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
  });
 
  export default server;