var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/testdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected');
});

var todoSchema = mongoose.Schema({
    name:      String,
    completed: Boolean ,//{ type : Boolean, default : false},
    addedAt:   Date
});

var todoModel = mongoose.model('todoModel', todoSchema);



app.post('/items', (req, res) => {
  //var addTodo = new todoModel ( req.body );
  var addTodo = new todoModel({ name: req.body.name, completed: false, addedAt: new Date() });
  addTodo.save( function (err, addTodo) {
  if (err) return console.error(err);

  res.setHeader('Location', 'http://localhost:4040/items/1');
  res.status(201).send('The TODOs were added.');
  })
});

app.put('/items/:id', (req, res) => {
  todoModel.update({ _id: req.params.id }, { name: req.body.name }, function (err, raw) {
  if (err) return handleError(err);
  res.status(204).end();
  });
});

app.delete('/items/:id', (req, res) => {
  todoModel.remove({ _id: req.params.id }, function (err) {
  if (err) return handleError(err);
  console.log('204 - The TODOs were deleted.');
  res.status(204).send('The TODOs were deleted.');
  });
});

app.get('/items', (req, res) => {
  todoModel.find({}, function(err, todos) {
    if (!err){
        res.json(todos);
        console.log('200 - The TODOs were returned.');
        res.status(200);
    } else {throw err;}
  });
});




app.listen(4040, () => {
  console.log('app.js listening on port 4040!')
});
