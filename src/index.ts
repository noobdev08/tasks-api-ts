import express = require("express");

const app = express();
app.use(express.json());

const todo = [{ id: 1, task: "Build health endpoint" }, { id: 2, task: "Display array of tasks on '/tasks' endpoint" }];

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get('/tasks', (req, res) => {
  res.status(200).json(todo);
})

app.post('/tasks', (req, res) => {
  const rawText = req.body?.title;
  if (typeof rawText === "undefined") {
    res.status(400).send('Invalid Input | Empty Body');
    return;
  } else if (typeof rawText !== "string") {
    res.status(400).send('Enter Valid Data Type | String');
    return;
  } else if (rawText.trim() === "") {
    res.status(400).send('Invalid Input | Enter Proper text');
    return;
  } else {
    const title = rawText.trim();
    const tag = todo.length + 1;
    const newItem = { id: tag, task: title };
    todo.push(newItem);
    res.status(201).json(newItem);
  }
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
})