const express = require("express");
const {API_VERSION} = require("./constants");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//Import routings
const authRoutes = require("./router/auth");

//Configure Body parse
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Configure static folder
app.use(express.static("uploads"));

//Configure Header HTTP - Cors
app.use(cors());

//Configure routings
app.use(`/api/${API_VERSION}`, authRoutes);

module.exports = app;
