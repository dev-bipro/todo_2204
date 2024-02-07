const express = require("express");
const taskSchema = require("../../../model/taskSchema");
const inputCheck = require("../../../helpers/inputHelper");
const headerSec = require("../../../middileware/headerSec");

const _ = express.Router();

_.post("/create", headerSec, (req, res) => {
  const { name, catagory } = req.body;
  //   const result = new taskSchema(req.body);
  //   result.save();
  //   res.send(result);
  //   inputCheck("ami");
  if (inputCheck(name, catagory).name || inputCheck(name, catagory).catagory) {
    console.log(inputCheck(name, catagory));
    res.status(400).send(inputCheck(name, catagory));
  } else {
    const result = new taskSchema(req.body);
    result.save();
    res.send(result);
  }
});
_.get("/get", headerSec, async (req, res) => {
  const result = await taskSchema.find();
  //   result.save();
  res.send(result);
});
_.put("/:_id", headerSec, async (req, res) => {
  const result = await taskSchema.updateOne(req.params, { $set: req.body });
  //   result.save();
  res.send(result);
});
_.delete("/:_id", headerSec, async (req, res) => {
  const result = await taskSchema.deleteOne(req.params);
  //   result.save();
  res.send(result);
});

module.exports = _;
