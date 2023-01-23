const mongoose = require('mongoose');
const { Schema } = mongoose;

const courses = new Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model('courses', courses);
