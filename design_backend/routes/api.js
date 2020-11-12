var router = require('express').Router();
var user_controller = require('../controllers/user');



//User routes
    router.get('/all-users', user_controller.getAll);
    router.post('/add-user', user_controller.addUser);

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


module.exports = router;
