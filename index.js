require("./db/dbConfig");
const express = require("express");
const app = express();
const routers = require("./routers");

app.use(express.json());

app.use("/", routers);

app.listen(8000, () => console.log("ami port"));
