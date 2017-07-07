const express = require('express');
const app = express();

app.post('/items', (req, res) => {
  res.setHeader('Location', 'http://localhost:4040/items/1');
  res.status(201).send('The TODOs were added.');
});

app.put('/items/:id', (req, res) => {
  res.status(204).end();
});

app.delete('/items/:id', (req, res) => {
  console.log('204 - The TODOs were deleted.');
  res.status(204).send('The TODOs were deleted.');
});

app.get('/items', (req, res) => {
  console.log('200 - The TODOs were returned.');
  res.status(200).json({"items":
    [{
    "title": "Buy ice-cream",
    "done": true
    },
    {
    "title": "Learn React",
    "done": false
    }]
  });
});

app.listen(4040, () => {
  console.log('app.js listening on port 4040!')
});
