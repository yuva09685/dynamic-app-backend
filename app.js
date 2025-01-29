const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const profileRouter = require("./routes/userRouter");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/profiles", profileRouter);

module.exports = app;
