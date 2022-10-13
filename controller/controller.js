const express = require("express");
const {
    newSchema
} = require("../models/userSchema");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const fileUpload = require("express-fileupload");
const multer = require("multer");

const app = express();


const newRoute = (req, res) => {
    res.render("addProduct");
};

module.exports = {
    newRoute,
};