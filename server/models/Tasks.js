const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
