'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/items')
    .get(todoList.get_all_items)
    .post(todoList.add_an_item);

  app.route('/items/:id')
    .put(todoList.update_an_item)
    .delete(todoList.delete_an_item);
  };
