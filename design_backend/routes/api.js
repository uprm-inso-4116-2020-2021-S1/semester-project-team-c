var router = require('express').Router();
var user_controller = require('../controllers/user');



//User routes
<<<<<<< HEAD
    router.get('/all-users', user_controller.getAll);
    router.post('/add-user', user_controller.addUser);
=======
    router.get('/all-users', user_controller.getAll); // Get all user information
    // Router for create user
    // Router for delete user
    
>>>>>>> 75885ce5b0e7ae2ee7e2390d62a549a47f7941cd

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


<<<<<<< HEAD
module.exports = router;
=======
module.exports = router; // Necessary for exports
>>>>>>> 75885ce5b0e7ae2ee7e2390d62a549a47f7941cd
