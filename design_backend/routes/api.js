var router = require('express').Router();
var user_controller = require('../controllers/user');
var guide_controller = require('../controllers/guide');
var company_controller = require('../controllers/company');
var customer_controller = require('../controllers/customer'); 




//User routes
    router.get('/all-users', user_controller.getAll);
    router.post('/add-user', user_controller.addUser);

//Guide routes
    // Router for create guide
    router.post('/add-guide', guide_controller.addGuide);
    // Router for delete guide
    
//Customer routes
    // Router for create customer
    router.post('/add-customer', customer_controller.addCustomer)
    // Router for delete customer
    
//Company routes
    // Router for create company
    router.get('/allcompanies', company_controller.getall);
    // Router for delete company
    

//Public routes


module.exports = router;
