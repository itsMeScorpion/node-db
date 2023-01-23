const express = require('express');
const router = express.Router();
const courses = require('../models/courses');

router
  .get('/', (req, res, next) => {
    res.send('respond with a resource');
  })
  .post('/', (req, res) => {
    courses.create(req.body);
    res.json({
      success: true,
      msg: 'Course Added',
    });
  })
  .patch('/', (req, res) => {
    courses.findByIdAndUpdate(req.body.id, req.body.values, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated courses : ', data);
        res.json(data);
      }
    });
  })
  .delete('/', (req, res) => {
    courses.findByIdAndDelete(req.body.id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Deleted : ', data);
        res.json(data);
      }
    });
  });

module.exports = router;
