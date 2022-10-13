require("dotenv").config();

const express = require("express");
require("./database/connection");
const session = require("express-session");
const passport = require("passport");
const {schema} = require("./models/schemas");
const web = require("./routes/routes");
const multer = require("multer");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
        secret: "Our Little Secret.",
        resave: false,
        saveUninitialized: false,
    })
);

// DATABASAE CONNECTION USED HERE

app.use(passport.initialize());
app.use(passport.session());

// USER SCHEMA . JS USED HERE

passport.use(loginDetail.createStrategy());

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, {
            id: user.id,
            username: user.username,
            userFname: user.userFname,
        });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const upload = multer({
    storage: storage
});
app.use("/", web);

app.listen(port, () => {
    console.log(`Server started on port`);
});