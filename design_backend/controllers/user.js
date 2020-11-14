var db = require('../models');
var user = db.user;

exports.addUser = function(userData) {
    console.log('Successfully added user...\n' + JSON.stringify(userData, null, 2));
    return user.create({
        email: userData.email,
        password: userData.password,
        role: userData.role,
        creation_date: new Date()
    });
}

exports.deleteUser = function(uid) {
    console.log('Deleting user with id: ' + uid + '...')
    return user.destroy({ where: { uid: uid }});
}

exports.getAll = function(req, res) {
    user.findAll().then((users) => {
        res.status(200).json(users);
    });
}

