const express = require('express');
const router = express.Router();
const teachers = require('../models/teachers');

router
  .get('/', (req, res, next) => {
    res.send('respond with a resource');
  })
  .post('/', (req, res) => {
    teachers.create(req.body);
    res.json({
      success: true,
      msg: 'Teacher Added',
    });
  });

router.patch('/', (req, res) => {
  teachers.findByIdAndUpdate(
    req.body.id,
    req.body.values,
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated teacher : ', data);
        res.json(data);
      }
    }
  );
});
router.delete('/', (req, res) => {
  teachers.findByIdAndDelete(req.body.id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted : ', docs);
    }
  });
});

module.exports = router;
