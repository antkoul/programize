var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
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

//add a todo
app.post('/items', (req, res) => {
  var addTodo = new todoModel({ name: req.body.name, completed: false, addedAt: new Date() });
  addTodo.save()
    .then( function (addTodo){
    res.setHeader('Location', 'http://localhost:4040/items/1');
    res.status(201).send('The TODOs were added.');
  })
  .catch(function(err) {
    console.log(err);
  });
});

//update a todo
app.put('/items/:id', (req, res) => {
  todoModel.update({ _id: req.params.id }, { name: req.body.name })
    .then( function(){
      res.status(204).end();
    })
    .catch(function(err) {
      console.log(err);
    });
});

//delete a todo
app.delete('/items/:id', (req, res) => {
  todoModel.remove({ _id: req.params.id })
    .then( function(){
      console.log('204 - The TODOs were deleted.');
      res.status(200).send('The TODOs were deleted.');
    })
    .catch(function(err) {
      console.log(err);
    });
});

//show all todos
app.get('/items', (req, res) => {
  todoModel.find({})
  .then(function(todos) {
    console.log('200 - The TODOs were returned.');
    res.json(todos);  // return all todos in JSON format
    res.status(200);
  })
  .catch(function(err) {console.log(err);});
});

app.listen(4040, () => {
  console.log('app.js listening on port 4040!')
});
