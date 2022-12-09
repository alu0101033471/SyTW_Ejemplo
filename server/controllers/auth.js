const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const user = require("../models/user");

function register(req, res) {
    const {nickname, nombre, email, password, edad} = req.body;

    if(!nickname) res.status(400).send({msg: "Nickname obligatorio"});
    if(!nombre) res.status(400).send({msg: "Nombre obligatorio"});
    if(!email) res.status(400).send({msg: "Email obligatorio"});
    if(!password) res.status(400).send({msg: "Password obligatorio"});
    if(!edad) res.status(400).send({msg: "Edad obligatoria"});

    const user = new User({
        nickname, 
        nombre,
        email: email.toLowerCase(),
        password, 
        edad
    })

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    user.password = hashPassword;
    user.save((error, userStorage) => {
        if(error) {
            res.status(400).send({msg: "Error al crear usuario"});
        } else {
            res.status(200).send(userStorage);
        }
    })
}

function login(req, res) {
    const {email, password} = req.body;
    if(!email) res.status(400).send({msg: "Email obligatorio"});
    if(!password) res.status(400).send({msg: "Password obligatorio"});
    
    const emailLowerCase = email.toLowerCase();

    console.log(emailLowerCase);

    User.findOne({email: emailLowerCase}, (error, userStore) =>
    {
        if(error) {
            console.log("PINCHE ERROR")
            res.status(400).send({msg: "Error del servidor"});
        } else {
            if(userStore){
                console.log("PINCHE NO ERROR")
                bcrypt.compare(password, userStore.password, (bcryptError, check) => {
                    if(bcryptError) {
                        res.status(500).send({msg: "Error del servidor al desencriptar"});
                    } else if (!check) {
                        res.status(400).send({msg: "Error del servidor. Password no coincide"});
                    } else {
                        res.status(200).send({
                            access: jwt.createAccessToken(userStore),
                            refresh: jwt.createRefreshToken(userStore)
                        });
                    }
                });
            } else {
                res.status(400).send({msg: "Usuario inexistente"});
            }
        }
    });
}

function refreshAccessToken(req, res) {
    const { token } = req.body;

    if(!token) res.status(400).send({msg: "Token requerido"});

    const {user_id} = jwt.decoded(token);

    //console.log(jwt.decoded(token));

    User.findOne({_id: user_id}, (error, userStorage) => {
        if(error){
            res.status(500).send({msg: "Error del servidor"});
        } else {
            res.status(200).send({
                accessToken: jwt.createAccessToken(userStorage)
            })
        }
    });
}

module.exports = {
    register,
    login,
    refreshAccessToken
}
