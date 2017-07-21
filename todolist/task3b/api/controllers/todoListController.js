'use strict';

var mongoose = require('mongoose');
var todoModel = mongoose.model('todoModel');

exports.get_all_items = function(req, res) {
  todoModel.find({})
  .then(function(todos) {
    console.log('200 - The TODOs were returned.');
    res.json(todos);  // return all todos in JSON format
    res.status(200);
  })
  .catch(function(err) {
    console.log(err);
  });
};

exports.add_an_item = function(req, res) {
  var addTodo = new todoModel({ name: req.body.name, completed: false, addedAt: new Date() });
  addTodo.save()
    .then( function (addTodo){
    res.setHeader('Location', 'http://localhost:4040/items/1');
    res.status(201).send('The TODOs were added.');
  })
  .catch(function(err) {
    console.log(err);
  });
};

exports.update_an_item = function(req, res) {
  todoModel.update({ _id: req.params.id }, { name: req.body.name })
    .then( function(){
      res.status(204).end();
    })
    .catch(function(err) {
      console.log(err);
    });
};

exports.delete_an_item = function(req, res) {
  todoModel.remove({ _id: req.params.id })
    .then( function(){
      console.log('204 - The TODOs were deleted.');
      res.status(200).send('The TODOs were deleted.');
    })
    .catch(function(err) {
      console.log(err);
    });
};
