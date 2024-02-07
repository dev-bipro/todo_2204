const express = require("express");

const _ = express.Router();
const apiRoute = require("./api");
const apiPath = "/api/v4";

_.use(apiPath, apiRoute);

module.exports = _;
