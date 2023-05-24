router = require('express').Router();
const UserControllers = require('../controllers/userController');
const JobController = require('../controllers/jobController');

const auhtentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/register', UserControllers.userRegister)
router.post('/login', UserControllers.userLogin)
router.use(auhtentication)
router.use(authorization)

router.get('/joblist', JobController.jobList)
router.get('/joblistdetails/:id', JobController.jobListDetail)

module.exports = router