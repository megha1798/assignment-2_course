var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CourseSchema = new Schema({
    CourseName: {
        type: String,
        required: true,
    },
    CourseID: {
        type: Number,
        required: true,
        unique: true
    },
    CourseDescription: {
        type: String,
        required: true
    }
})



const model = mongoose.model("courses", CourseSchema);

module.exports = model;