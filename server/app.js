const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fs = require("fs");
const controllers = require("./controller");

const app = express();

const { oauth, signin, signout, signup, cocktails, cocktail, updateProfile, deleteAccount } = controllers;

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
app.get("/cocktails", cocktails);
app.get("/cocktails/:id", cocktail);
app.post("/updateProfile", updateProfile)
app.post("/deleteAccount", deleteAccount)
module.exports = app;
