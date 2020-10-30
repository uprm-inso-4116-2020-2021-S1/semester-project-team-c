var db = require('../models');
var guide = db.guide;


exports.getAll = function(req, res) {
    guide.findAll().then((guides) => {
        res.status(200).json(guides);
    });
}

exports.addGuide = function(guideData) {
    console.log('Successfully added guide...\n' + JSON.stringify(userData, null, 2));
    return user.create({
        email: userData.email,
        password: userData.password,
        role: userData.role,
        creation_date: new Date()
    });
}