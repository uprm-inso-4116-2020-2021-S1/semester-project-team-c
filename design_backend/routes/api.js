var router = require('express').Router();
var config = require('../config/config').accessLevels;
var user_controller = require('../controllers/user');


var allowOnly = require('../services/checkAuth').allowOnly;

var APIRoutes = function(passport) {

    router.get('/users/all', user_controller.getAll);

    return router;
}
module.exports = APIRoutes;