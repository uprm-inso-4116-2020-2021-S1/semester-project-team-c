var router = require('express').Router();
var user_controller = require('../controllers/user');
var guide_controller = require('../controllers/guide');
var company_controller = require('../controllers/company');
var customer_controller = require('../controllers/customer');
var event_controller = require('../controllers/event');
var tour_controller = require('../controllers/tour');
var review_controller = require('../controllers/review');
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

    //Events
    router.post('/tour/create', tour_controller.createTour);
    router.get('/tour/:gid', tour_controller.getGuideTours);
    router.delete('/tour/delete/:tid', tour_controller.deleteTour)
    router.get('/event/tour/:tid', event_controller.getAllEventsInTour);
    router.get('/event/city/:city', event_controller.getEventsByCity);
    router.delete('/event/delete/:eid', event_controller.guideDeleteEvent);

    //Review
    router.get('/review/all-reviews', review_controller.getAllReviews);
    router.get('/review/all-user-reviews', review_controller.getAllUserReviews);
    router.get('/review/all-tour-reviews', review_controller.getAllTourReviews);
    router.get('/review/all/about/:uid', review_controller.getAllReviewsAboutUser);
    router.get('/review/all/from/:uid', review_controller.getAllReviewsFromUser);
    router.post('/review/user-review-create', review_controller.createUserReview);
    router.post('/review/tour-review-create', review_controller.createTourReview);
    router.delete('/review/delete/:rfuid', review_controller.deleteUserReviewsByRfuid);
    router.delete('/review/delete/:trid', review_controller.deleteTourReviewsByTrid);
    

    //Public routes
    return router;
};




module.exports = APIRoutes;
