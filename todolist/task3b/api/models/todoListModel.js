'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = mongoose.Schema({
    name:      String,
    completed: Boolean ,//{ type : Boolean, default : false},
    addedAt:   Date
});

module.exports = mongoose.model('todoModel', todoSchema);
