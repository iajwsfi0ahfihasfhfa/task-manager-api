const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();

app.use(express.json());
app.use('/api/tasks', tasksRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
