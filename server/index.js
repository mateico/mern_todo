const { json } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const TaskModel = require("./models/Tasks");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://mateo_82:matemate@cluster0.fbo3o.mongodb.net/tododb?retryWrites=true&w=majority"
);

app.get("/getTasks", (req, res) => {
  TaskModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createTask", async (req, res) => {
  const task = req.body;
  const newTask = new TaskModel(task);
  await newTask.save();
  res.json(task);
});

app.listen(3001, () => {
  console.log("server runs OK!!");
});
