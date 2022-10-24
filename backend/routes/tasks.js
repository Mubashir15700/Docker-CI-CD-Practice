const router = require("express").Router();
const Task = require("../models/Task");

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/tasks", async (req, res) => {
  const newtask = new Task({
    text: req.body.text,
  });
  const savedTask = await newtask.save();
  res.json(savedTask);
});

router.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.end();
});

module.exports = router;
