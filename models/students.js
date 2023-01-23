const mongoose = require('mongoose');

const { Schema } = mongoose;

const students = new Schema({
  name: {
    type: String,
    required: true,
  },
  course:{
    type:String,
    required:true
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model('students', students);
