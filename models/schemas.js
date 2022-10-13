const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const schema = new mongoose.Schema({
    userFname: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [20, "Name must be at most 20 characters long"],
    },
    username: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        minlength: [3, "Password must be at least 3 characters long"],
    },
    phone: {
        type: Number,
        minlength: [10, "Phone must be at least 3 characters long"],
        maxlength: [13, "Phone must be at most 20 characters long"],
    },
    address: {
        type: String,
        minlength: [5, "Address must be at least 3 characters long"],
    },
    avatar: {
        type: String,
        contentType: String,
    },
    panImg: {
        type: String,
        contentType: String,
    },
});

schema.plugin(passportLocalMongoose);
schema.plugin(findOrCreate);

const newSchema = mongoose.model("newSchema", schema);

module.exports = {
    newSchema
};