var db = require('../models');
var user = db.user;
var config = require('../config/config');
var request = require('request');

exports.addUser = function(userData) {
    console.log('Successfully added user...\n' + JSON.stringify(userData, null, 2));
    return user.create({
        email: userData.email,
        password: userData.password,
        role: userData.role,
        creation_date: new Date()
    });
}

exports.deleteUser = function(id) {
    console.log('Deleting user with id: ' + id + '...')
    return user.destroy({ where: { id: id }});
}

exports.test = function(req, res) {
    console.log('test1');
}

exports.getAll = function(req, res) {
    user.findAll().then((users) => {
        res.status(200).json(users);
    });
}