const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fs = require("fs");
const controllers = require("./controller");

const app = express();

const { oauth, signin, signout, signup, updateProfile } = controllers;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.post("/oauth", oauth);
app.post("/signin", signin);
app.post("/signup", signup);
app.get("/signout", signout);
app.post("/updateProfile", updateProfile)

module.exports = app;
