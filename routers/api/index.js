const express = require("express");
const taskRoute = require("./task");

const _ = express.Router();

_.use("/task", taskRoute);

module.exports = _;
