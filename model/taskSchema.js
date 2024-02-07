const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  name: String,
  catagory: String,
});
module.exports = mongoose.model("task", taskSchema);
