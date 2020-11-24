var router = require('express').Router();
var user_controller = require('../controllers/user');
var guide_controller = require('../controllers/guide');
var company_controller = require('../controllers/company');
var customer_controller = require('../controllers/customer');
var allowOnly = require('../services/authCheck').allowOnly;



var APIRoutes = function (passport) {
    //public routes
    router.post('/login', user_controller.login);

    //User routes
    router.get('/user/all-users', user_controller.getAll);
    router.get('/user/:email', user_controller.getUserInfo);

    //Guide routes
    router.post('/guide/add-guide', guide_controller.addGuide);
    router.get('/guide/:uid', guide_controller.getGuideInfo);


    //Customer routes
    router.get('/customer/all-customers', customer_controller.getall);
    router.post('/customer/add-customer', customer_controller.addCustomer);
    router.get('/customer/:uid', customer_controller.getCustomerInfo);
    // Router for delete customer

    //Company routes
    // Router for create company
    router.get('/company/allcompanies', company_controller.getall);
    // Router for delete company


    //Public routes
    return router;
};




module.exports = APIRoutes;
