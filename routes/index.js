var express = require('express');
var router = express.Router();
const Controller = require('../controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',Controller.teacher);
router.post('/td',Controller.teacherdetail);
router.post('/studentregister',Controller.student);
router.post('/sd',Controller.studentdetail);

router.delete('/user/delete/:id',Controller.deleteteacher);
router.delete('/student/delete/:id',Controller.deletestudent);

router.put('/update/:id',Controller.updateteacher);
router.put('/student/:id',Controller.updatestudent);

router.get('/find/:id',Controller.getteacher);
router.get('/fs/:id',Controller.getstudent);
module.exports = router;
