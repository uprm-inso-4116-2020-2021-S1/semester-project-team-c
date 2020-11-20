var db = require('../models');
var jwt = require('jsonwebtoken');
var config = require('../config/configuration');
var user = db.user;


exports.deleteUser = function(uid) {
    console.log('Deleting user with id: ' + uid + '...')
    return user.destroy({ where: { uid: uid }});
}

exports.getAll = function(req, res) {
    user.findAll().then((users) => {
        res.status(200).json(users);
    });
}


exports.login = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var username = email.split('@')[0];
    // guide LOGIN
    guide.findOne({ where: { email: email }}).then((guide_user) => {
        if (guide_user) {
                
                if (password == guide_user.password) {
                    var access_token = jwt.sign({id: guide_user.email}, config.keys.secret, {
                        expiresIn: 30*30
                    });
                    res.status(200).json({
                        success: true,
                        registered: true,
                        loggedIn: true,
                        message: 'Successfully logged in as guide.',
                        access_token: access_token,
                        email: guide_user.email,
                        role: 'guide'
                    });
                } else {
                    res.status(401).json({
                        success: false,
                        message: 'Error logging in. Password is incorrect.',
                        error: err
                    });
                }
        } else {
            // customer LOGIN
            customer.findOne({ where: { email: email }}).then((customer_user) => {
                if (customer_user) {
                        if (passwordIsCorrect) {
                            var access_token = jwt.sign({id: customer_user.email}, config.keys.secret, {
                                expiresIn: 30*30
                            });
                            res.status(200).json({
                                success: true,
                                registered: true,
                                message: 'Successfully logged in as Customer.',
                                access_token: access_token,
                                email: customer_user.email,
                                role: 'customer'
                            });
                        } else {
                            res.status(401).json({
                                success: false,
                                message: 'Error logging in. Password is incorrect.',
                                error: err
                            });
                        }
                } 
            });
        }
    });
}

