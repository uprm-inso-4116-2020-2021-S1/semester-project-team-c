var db = require('../models');
var guide = db.guide;
var config = require('../config/config');
var request = require('request');


exports.getAll = function(req, res) {
    guide.findAll().then((guides) => {
        res.status(200).json(guides);
    });
}

exports.addGuide = function(guideData) { //gid automatically created by DB
    console.log('Successfully added guide...\n' + JSON.stringify(guideData, null, 2));
    return user.create({
        email: userData.email,
        password: userData.password,
        role: userData.role,
        creation_date: new Date().toLocaleDateString()
    });
}


exports.makeInactiveGuide = function(id) {
    console.log('Making inactive guide with id: ' + id + '....')
    // return guide where he is now inactive on tables
}


// exports.deleteUser = function(id) { TO BE REPLACED BY MAKEINACTIVEGUIDE 
//     console.log('Deleting user with id: ' + id + '...')
//     return user.destroy({ where: { id: id }});
// }