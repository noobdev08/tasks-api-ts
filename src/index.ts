import express = require("express");

const app = express();
const todo = [{ id: 1, task: "Build health endpoint" }, { id: 2, task: "Display array of tasks on '/tasks' endpoint"}];

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get('/tasks', (req, res) => {
  res.json(todo);
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
})