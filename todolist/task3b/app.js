var express = require('express');
var app = express();
port = process.env.PORT || 4040;
var mongoose = require('mongoose');
var todoModel= require('./api/models/todoListModel')
var bodyparser = require('body-parser');
app.use(bodyparser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected');
});

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port, () => {
  console.log('app.js listening on port '+port);
});
