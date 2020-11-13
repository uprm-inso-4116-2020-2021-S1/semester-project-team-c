var router = require('express').Router();
var user_controller = require('../controllers/user');
var guide_controller = require('../controllers/guide');



//User routes
    router.get('/all-users', user_controller.getAll);

//Guide routes
    // Router for create guide
    router.post('/add-guide', guide_controller.addGuide);
    // Router for delete guide
    
//Customer routes
    // Router for create customer
    // Router for delete customer
    
//Company routes
    // Router for create company
    // Router for delete company
    

//Public routes


module.exports = router;
