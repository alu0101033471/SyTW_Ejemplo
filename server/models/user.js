const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    edad: {
        type: Number,
        required: true,
        trim: true
    },
    comicsLeidos: [{type: String}],
    comicsFav: [{type: String}],
    personajesFav: [{type: String}]
}, {versionKey: false,
    timestamps: true});

module.exports = mongoose.model("User", UserSchema);