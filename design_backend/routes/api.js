var router = require('express').Router();
var user_controller = require('../controllers/user');
var guide_controller = require('../controllers/guide');
var company_controller = require('../controllers/company');
var customer_controller = require('../controllers/customer');
var allowOnly = require('../services/authCheck').allowOnly;



var APIRoutes = function (passport) {
    //User routes
    router.get('/user/all-users', user_controller.getAll);
    // router.post('/user/add-user', user_controller.addUser);

    //Guide routes
    // Router for create guide
    router.post('/guide/add-guide', guide_controller.addGuide);
    // Router for delete guide

    //Customer routes
    // Router for create customer
    router.get('/customer/all-customers', customer_controller.getall);
    router.post('/customer/add-customer', customer_controller.addCustomer);
    // Router for delete customer

    //Company routes
    // Router for create company
    router.get('/company/allcompanies', company_controller.getall);
    // Router for delete company


    //Public routes
    return router;
};




module.exports = APIRoutes;
