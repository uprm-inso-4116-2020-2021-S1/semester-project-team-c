var router = require('express').Router();
var config = require('../config/config').accessLevels;
var user_controller = require('../controllers/user');



//User routes
    router.get('/all-users', user_controller.getAll); // Get all user information
    // Router for create user
    // Router for delete user
    

//Guide routes
    // Router for create guide
    // Router for delete guide
    
//Customer routes
    // Router for create customer
    // Router for delete customer
    
//Company routes
    // Router for create company
    // Router for delete company
    

//Public routes


module.exports = router; // Necessary for exports