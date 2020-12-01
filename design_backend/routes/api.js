var router = require('express').Router();
var user_controller = require('../controllers/user');
var guide_controller = require('../controllers/guide');
var company_controller = require('../controllers/company');
var customer_controller = require('../controllers/customer');
var event_controller = require('../controllers/event');
var tour_controller = require('../controllers/tour');
var location_controller = require('../controllers/location')
var review_controllor = require('../controllers/review')
var allowOnly = require('../services/authCheck').allowOnly;



var APIRoutes = function (passport) {
    //public routes
    router.post('/login', user_controller.login);
    router.get('/location/all-locations', )

    //User routes
    router.get('/user/all-users', user_controller.getAll);
    router.get('/user/:email', user_controller.getUserInfo);

    //Guide routes
    router.post('/guide/add-guide', guide_controller.addGuide);
    router.get('/guide/:uid', guide_controller.getGuideInfo);
    router.get('/guide/all-guides', guide_controller.getAll);


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
    router.post('/event/create', event_controller.createEvent);
    router.get('/tour/guides/:gid', tour_controller.getGuideTours);
    router.get('/tour/info/:tid', tour_controller.getTourInfo);
    router.delete('/tour/delete/:tid', tour_controller.deleteTour)
    router.get('/event/tour/:tid', event_controller.getAllEventsInTour);
    router.get('/event/city/:city', event_controller.getEventsByCity);
    router.delete('/event/delete/:eid', event_controller.guideDeleteEvent);
    router.get('/tour/attending/:uid', tour_controller.toursAttending);
    router.post('/tour/:tid/user/:uid', tour_controller.addToAttendingList);
    router.get('/tour/company/:coid/guideList/:tid', tour_controller.getTourGuides);

    //review
    router.get('/review/all-reviews', review_controllor.getAllReviews)

    //Public routes
    return router;
};




module.exports = APIRoutes;
