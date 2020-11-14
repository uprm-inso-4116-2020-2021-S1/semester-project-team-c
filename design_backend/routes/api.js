var router = require('express').Router();
var user_controller = require('../controllers/user');
var guide_controller = require('../controllers/guide');
var company_controller = require('../controllers/company');
var customer_conrtroller = require('../controllers/customer'); 




//User routes
    router.get('/user/all-users', user_controller.getAll);

//Guide routes
    // Router for create guide
    router.post('/guide/add-guide', guide_controller.addGuide);
    // Router for delete guide
    
//Customer routes
    // Router for create customer
    router.post('/customer/add-customer', )
    // Router for delete customer
    
//Company routes
    // Router for create company
    router.get('/company/allcompanies', company_controller.getall);
    // Router for delete company
    

//Public routes


module.exports = router;
