var router = require('express').Router();
var config = require('../config/config').accessLevels;
var user_controller = require('../controllers/users');


var allowOnly = require('../services/checkAuth').allowOnly;