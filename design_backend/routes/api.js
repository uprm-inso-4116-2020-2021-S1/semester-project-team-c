var router = require('express').Router();
var config = require('../config/config').accessLevels;
var user_controller = require('../controllers/user');



//User routes
    router.get('/all-users', user_controller.getAll);

//Guide routes

//Customer routes

//Company routes

//Public routes
module.exports = router;