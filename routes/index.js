var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  })
  .use('/teachers', teacherRouter)
  .use('/courses', courseRouter)
  .use('/students', studentRouter);

module.exports = router;
