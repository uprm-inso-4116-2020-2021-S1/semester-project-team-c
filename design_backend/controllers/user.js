var db = require('../models');
var jwt = require('jsonwebtoken');
var config = require('../config/configuration');
var user = db.user;
var guide = db.guide;
var customer = db.customer;


exports.deleteUser = function (uid) {
    console.log('Deleting user with id: ' + uid + '...')
    return user.destroy({ where: { uid: uid } });
}

exports.getAll = function (req, res) {
    user.findAll().then((users) => {
        res.status(200).json(users);
    });
}


exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    // guide LOGIN
    user.findOne({ where: { email: email } }).then((fetched_user) => {
        if (fetched_user.role == 1) {
            if (password == fetched_user.password) {
                var access_token = jwt.sign({ id: fetched_user.email }, config.keys.secret, {
                    expiresIn: 30 * 30
                });
                res.status(200).json({
                    success: true,
                    loggedIn: true,
                    message: 'Successfully logged in as guide.',
                    access_token: access_token,
                    email: fetched_user.email,
                    role: 'guide'
                });
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Error logging in. Password is incorrect.'
                });
            }
        } else if (fetched_user.role == 0) {
            // customer LOGIN
            if (password == fetched_user.password) {
                var access_token = jwt.sign({ id: fetched_user.email }, config.keys.secret, {
                    expiresIn: 30 * 30
                });
                res.status(200).json({
                    success: true,
                    loggedIn: true,
                    message: 'Successfully logged in as guide.',
                    access_token: access_token,
                    email: fetched_user.email,
                    role: 'customer'
                });
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Error logging in. Password is incorrect.'
                });
            }
        }
    });
}

