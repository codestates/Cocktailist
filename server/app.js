const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fs = require("fs");
const authRouter = require("./routes/auth")
const cocktailRouter = require("./routes/cocktails");
const mypageRouter = require("./routes/mypages");
const app = express();

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

app.use("/auth", authRouter);
app.use("/cocktails", cocktailRouter);
app.use("/mypages", mypageRouter);
module.exports = app;
