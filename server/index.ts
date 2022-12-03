import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSucces } from './src/utils/logger';

// Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000;

//ejecución del servidor
server.listen(port, () =>{
  LogSucces(`[Server ON]: Corriendo en http://localhost:${port}/api`);
});

// Error de control 
server.on('error', (error) => {
  LogError(`[Server ERROR]: ${error}`);
});
