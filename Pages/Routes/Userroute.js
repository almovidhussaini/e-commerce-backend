const router = require("express").Router();
const UserController = require('../Controllers/Usercontroller')

router.post('/register',UserController.registeruser)
router.get('/login',UserController.login)
module.exports = router