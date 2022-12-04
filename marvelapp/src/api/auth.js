import { ENV } from "../utils"

export class Auth {
  baseapi = ENV.BASE_API;
  async register(data) {
    try {
      const url = `${this.baseapi}/${ENV.API_ROUTES.REGISTER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        })
      }
      const response = await fetch(url, params, {
        'mode': 'no-cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    });
      const result = await response.json();
      if(response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}