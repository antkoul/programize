var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise; //
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

app.get('/items', (req, res) => {
  todoModel.find({})
  .then(function(todos) {
    res.json(todos);  // return all todos in JSON format
    console.log('200 - The TODOs were returned.');
    res.status(200);
  })
  .catch(err){
    console.log(err);
  }
});




app.listen(4040, () => {
  console.log('app.js listening on port 4040!')
});
