const mongoose = require('mongoose');

const { Schema } = mongoose;

const teachers = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('teacher', teachers);
