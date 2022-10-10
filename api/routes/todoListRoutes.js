module.exports = function (app) {
	var toDoList = require('../controllers/todoListControllers');


	//todoList Routes

	

app.route('/getCourse/:courseID')
    .get(toDoList.getCourse)
app.route('/updateCourse')
    .put(toDoList.updateCourse)
app.route('/getAllCourses')
    .get(toDoList.getAllCourses)
app.route("/deleteCourse/:courseID")
	.delete(toDoList.deleteCourse);

 app.route("/insertCourse")
	.post(toDoList.insertCourse);
    
module.exports = toDoList
};