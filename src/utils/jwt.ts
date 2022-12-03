import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { json } from 'body-parser';

dotenv.config();

const jwt_token = String(process.env.JWT_TOKEN);


export function createAccessToken(user: any){
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 3);

    const payload = {
        token_type:"access",
        user_id: user.user_id,
        iat: Date.now(),
        exp: expToken.getTime()
    };
    return jwt.sign(payload, jwt_token);
}

export function createRefreshToken(user:any){
    const expToken = new Date();
    expToken.setMonth(expToken.getMonth() + 1);

    const payload = {
        token_type:"access",
        user_id: user.user_id,
        iat: Date.now(),
        exp: expToken.getTime()
    };
    return jwt.sign(payload, jwt_token);
}

export function decoded(token: any){
    return jwt.decode(token, {complete: true});
}

export default {
  createAccessToken,
  createRefreshToken,
  decoded
}