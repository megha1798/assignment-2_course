var mongoose = require('mongoose');
var Courses = mongoose.model('courses');

//Display list of all tasks
exports.list_all_courses = function (req, res) {
	Courses.find({}, function (err, course) {
		if (err)
			res.send(err);
		res.json(course);
	});
};



exports.create_a_course = function (req, res) {
	var new_course = new Courses(req.body);
	new_course.save(function (err, course) {
		if (err)
			res.send(err);
		res.json(course);
	});
};
exports.deleteCourse = async (req, res) => {
	try {
		const { Courseid } = req.params;
		const courses = await Courses.deleteOne({ Courseid });
		return response({ res, data: courses });
	} catch (err) {
		response({ res, err });
	}
};

