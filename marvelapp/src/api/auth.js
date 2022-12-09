import { ENV } from "../utils"

export class Auth {
  baseapi = ENV.BASE_API;
  async register(data) {
    try {
      const url = `${this.baseapi}/${ENV.API_ROUTES.REGISTER}`;
      console.log(url);
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: data.nombre,
          nickname: data.nickname,
          edad: data.edad,
          email: data.email,
          password: data.password,
        }),
      };

      console.log(params);
      const response = await fetch(url, params);
      const result = await response.json();
      if(response.status !== 200) 
      { 
        console.error("ERROR:");
        throw result;
      }
      return result; 
    } catch (error) {
      throw error;
    }
  }

  // async login(data) {
  //   // eslint-disable-next-line no-undef
  //   try {
  //     const url = `${this.baseapi}/${ENV.API_ROUTES.LOGIN}`;
  //     const params = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data)
  //     };
  //     console.log(url);

  //     console.log(params);
  //     const response = await fetch(url, params);
  //     const result = await response.json();

  //     if(response.status !== 200) throw result;
  //       return result;
  //   } catch (error) {
  //       throw error;
  //   }
  // };
}