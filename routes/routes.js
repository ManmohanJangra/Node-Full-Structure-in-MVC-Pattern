const express = require("express");
const app = express.Router();
const controller = require("../controller/controller");
const passport = require("passport");
const multer = require("multer");

app.get("/", controller.newRoute);

module.exports = app;