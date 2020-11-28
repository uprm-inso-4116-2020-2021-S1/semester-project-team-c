var JWTStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var db = require('../models');
var customer = db.recruiter;
var guide = db.guide;
var config = require('../config/configuration');

// Hooks the JWT Strategy.
function hookJWTStrategy(passport) {
    var jwtOptions = {}
    jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = config.keys.secret;
    passport.use(new JWTStrategy(jwtOptions, function (jwt_payload, next) {
        // Check if Guide
        guide.findOne({ where: { email: jwt_payload.id } }).then(function (guide) {
            if (guide) {
                next(null, guide);
            } else {
                // Check customer
                customer.findOne({ where: { email: jwt_payload.id } }).then((customer) => {
                    if (customer) {
                        next(null, customer)
                    } else {
                        next(null, false);
                        return;
                    }
                });
            }
        });
    }));
}

module.exports = hookJWTStrategy;