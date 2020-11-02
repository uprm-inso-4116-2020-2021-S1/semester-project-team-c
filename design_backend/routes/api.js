var router = require('express').Router();
var user_controller = require('../controllers/user');



//User routes
    router.get('/all-users', user_controller.getAll);
    router.post('/add-user', user_controller.addUser);

//Guide routes

//Customer routes

//Company routes

//Public routes


module.exports = router;