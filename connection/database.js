const mongoose = require("mongoose");

mongoose
    .connect("mongodb://0.0.0.0:/databaseName")
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Connection failed", err);
    });