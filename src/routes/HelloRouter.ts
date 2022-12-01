import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

//Router from express
const helloRouter = express.Router();

// http://localhost:8000/api/hello?name=Marcos/
helloRouter.route('/')
//GET
  .get(async (req: Request, res: Response) => {
    // obtener Query param
    const name: any = req?.query?.name; 
    LogInfo(`Quewry param: ${name}`);
    //Controller Instance to excuse method
    const controller: HelloController = new HelloController();
    //Obtener respuesta
    const response = await controller.getMessage(name);

    // send to the client the response
    return res.send(response);

  })

  //export HelloRouter
  export default helloRouter;
