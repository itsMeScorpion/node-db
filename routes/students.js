const express = require('express');
const router = express.Router();
const students = require('../models/students');

router
  .route('/')
  .get((req, res, next) => {
    res.send('respond with a resource');
  })
  .post((req, res) => {
    students.create(req.body);
    res.json({
      success: true,
      msg: 'Student Added',
    });
  })
  .patch((req, res) => {
    students.findByIdAndUpdate(req.body.id, req.body.values, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated student : ', data);
        res.json(data);
      }
    });
  })
  .delete((req, res) => {
    students.findByIdAndDelete(req.body.id, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Deleted : ', docs);
      }
    });
  });

module.exports = router;
