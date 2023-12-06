const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/database");
const req = require("express/lib/request");

connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());
module.exports = app;


