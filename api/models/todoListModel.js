var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CourseSchema = new Schema({
	Courseid:{
		type:Number,
		option: 'AUTO_INCREMENT'
	},
	Coursename:{
		type:String,
		required:'Kindly enter course name'
	},
	Coursedes:{
		type:String,
		required:'Kindly enter course descprition'
	},
	
});

module.exports = mongoose.model('courses',CourseSchema);