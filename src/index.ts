import express from 'express';
import * as z from 'zod';

const app = express();
app.use(express.json());

const todo = [{ id: 1, task: "Build health endpoint" }, { id: 2, task: "Display array of tasks on '/tasks' endpoint" }];

// Schema
const TodoSchema = z.object({
  title: z.string().trim().nonempty(),
})

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get('/tasks', (req, res) => {
  res.status(200).json(todo);
})

app.post('/tasks', (req, res) => {
  const result = TodoSchema.safeParse(req.body);
  if (result.success) {
    const title = result.data.title;
    const tag = Math.max(0, ...todo.map(task => task.id)) + 1;
    const newItem = { id: tag, task: title };
    todo.push(newItem);
    res.status(201).json(newItem);
    return
  } else {
    res.status(400).send(result.error.message);
    return;
  }
})

/*
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).send('Invalid id');
    return;
  }

  const position = todo.findIndex(task => task.id === id);

  if (position === -1) {
    res.status(404).send('Task not found');
    return;
  }

  const deleted = todo.splice(position, 1);
  res.status(200).json(deleted[0]);
});
*/

app.delete('/tasks/:id', (req, res) => {
  const id= Number(req.params.id);

  if(Number.isNaN(id)){
    res.status(400).send("Invalid ID")
    return
  }

  const position = todo.findIndex(todo => todo.id === id)

  if (position === -1) {
    res.status(404).send('Task not found');
    return;
  }

  const deleted = todo.splice(position, 1);
  res.status(200).json(deleted[0]);
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
})