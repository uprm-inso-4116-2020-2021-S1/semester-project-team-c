var db = require('../models');
var guide = db.guide;
var user = db.user;


exports.getAll = function (req, res) {
    guide.findAll().then((guides) => {
        res.status(200).json(guides);
    });
}

exports.addGuide = function (req, res) { //gid automatically created by DB
    var guideData = req.body;
    user.create({
        email: guideData.email,
        password: guideData.password,
        role: guideData.role,
        creation_date: new Date().toLocaleDateString()
    }).then((new_user) => {
        console.log("New user id" + JSON.stringify(new_user, null, 2));
        console.log('Successfully added guide...\n' + JSON.stringify(req.body, null, 2));
        guide.create({
            firstName: guideData.firstName,
            lastName: guideData.lastName,
            phoneNumber: guideData.phoneNumber,
            description: guideData.description,
            facebook: guideData.facebook,
            twitter: guideData.twitter,
            youtube: guideData.youtube,
            instagram: guideData.instagram,
            user_uid: new_user.uid,
            company_coid: new_user.uid,
            company_location_lid: new_user.uid,
        })
    }).then(() => {
        res.status(200).json({
            success: true,
            message: 'Successfully added recruiter!',
            first_name: guideData.firstName,
            last_name: guideData.lastName
        });
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error adding recruiter...',
            error: err
        });
    });
}


exports.makeInactiveGuide = function (id) {
    console.log('Making inactive guide with id: ' + id + '....')
    // return guide where he is now inactive on tables
}


// exports.deleteUser = function(id) { TO BE REPLACED BY MAKEINACTIVEGUIDE 
//     console.log('Deleting user with id: ' + id + '...')
//     return user.destroy({ where: { id: id }});
// }