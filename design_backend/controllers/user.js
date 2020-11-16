var db = require('../models');
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

