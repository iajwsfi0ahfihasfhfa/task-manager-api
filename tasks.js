const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: 'Initial task', completed: false }
];

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Create a new task
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update task status
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  if (typeof req.body.completed === 'boolean') {
    task.completed = req.body.completed;
  }
  res.json(task);
});

// Delete a task
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== parseInt(id));
  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.status(204).send();
});

module.exports = router;
