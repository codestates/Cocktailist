const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fs = require("fs");
const controllers = require("./controller");
const cocktailRouter = require("./routes/cocktails");
const mypageRouter = require("./routes/mypages");
const communityRouter = require("./routes/community")
const app = express();

const {
  oauth,
  signin,
  signout,
  signup,
} = controllers;

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

app.use("/cocktails", cocktailRouter);
app.use("/mypages", mypageRouter);
app.use("/community", communityRouter);
app.post("/oauth", oauth);
app.post("/signin", signin);
app.post("/signup", signup);
app.get("/signout", signout);
module.exports = app;
