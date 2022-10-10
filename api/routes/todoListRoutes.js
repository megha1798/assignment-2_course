module.exports = function (app) {
	var toDoList = require('../controllers/todoListControllers');


	//todoList Routes

	app.route('/courses')
		.get(toDoList.list_all_courses)
		.post(toDoList.create_a_course);

	app.route("/deleteCourse/:Courseid")
		.delete(toDoList.deleteCourse)
};