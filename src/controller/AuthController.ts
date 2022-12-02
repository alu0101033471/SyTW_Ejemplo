 /*export function Register(req: any, res: any) {
   console.log("Se ha realizago el resgistro satisfactoriamente");
   res.status(200).send({msg: "Todo OK"});
 }*/
 import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSucces } from "../utils/logger";

@Route("api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
  /**
   * Endpoint to retreive a Mesagge "Hello {name}" in JSON
   * @param { string | undefined } name Nombre del usuario por criterio
   * @returns { BasicResponse } Promise of Basicresponse
   */
  @Get("/")
  public async getMessage(@Query()name?: string): Promise<BasicResponse> {
    LogSucces('[/api/hello] Get Request');

    return {
      message: `Hello ${name || "world" }`
    }
  }

}