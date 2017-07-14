var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/:27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected');
});

var todoSchema = mongoose.Schema({
    name:      String,
    completed: Boolean,
    addedAt:   Date
});

var todoModel = mongoose.model('todoModel', todoSchema);

var addTodo = new todoModel({ name: 'addTodo', completed: 'false', addedAt: Date() });

app.post('/items', (req, res) => {
  addTodo.save( function (err, addTodo) {
  if (err) return console.error(err);

  res.setHeader('Location', 'http://localhost:4040/items/1');
  res.status(201).send('The TODOs were added.');
});



app.listen(4040, () => {
  console.log('app.js listening on port 4040!')
});
