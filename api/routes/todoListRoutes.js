module.exports = function(app){
	var toDoList = require('../controllers/todoListControllers');


	//todoList Routes

	app.route('/courses')
	.get(toDoList.list_all_cousre)
	.post(toDoList.create_a_course);
};