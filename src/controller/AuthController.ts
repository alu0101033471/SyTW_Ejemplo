import User from '../models/user'
import bcrypt from 'bcrypt';

export function Register(req: any, res: any) {
  //Obtención de los datos ingresados
  const {nombreUsuario, 
         nombrePersona, 
         password, 
         email, 
         edad, 
         comicLeidos, 
         comicFav, 
         personajeFav} = req.body;
  
  if(!nombreUsuario) res.status(400).send({msg: "El nick es un campo obligatorio"});
  if(!nombrePersona) res.status(400).send({msg: "El nombre es un campo obligatorio"});
  if(!edad) res.status(400).send({msg: "La edad es un campo obligaotorio"});
  if(!password) res.status(400).send({msg: "La contraseña es un campo obligatorio"});
  if(!email) res.status(400).send({msg: "El email es un campo obligatorio"});

  const user = new User({
    nombreUsuario: nombreUsuario.toLowerCase(), 
    nombrePersona, 
    email: email.toLowerCase(), 
    edad, 
    comicLeidos, 
    comicFav, 
    personajeFav});

  const salt = bcrypt.genSaltSync(10);
  const hashPasswd = bcrypt.hashSync(password, salt);
  user.password = hashPasswd;
  console.log(user);
  

  //Guardamos el usuario en la base de datos
  user.save((error, userStorage) => {
    if(error) {
      res.status(400).send({msg: "Error en la creación del usuario"});
    } else {
      res.status(200).send(userStorage);
    }
  });
}


/*
{
    "nombreUsuario": "Juan123",
    "nombrePersona": "Juan",
    "password": "adminpass"
    "email": "juanito@gmail.com",
    "edad": 42,
    "comicLeidos":"", 
    "comicFav":"", 
    "personajeFav":""
}

*/