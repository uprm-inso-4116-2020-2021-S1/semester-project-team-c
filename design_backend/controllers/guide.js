var db = require('../models');
var guide = db.guide;
var user = db.user;
var company = db.company;
var location = db.location;


exports.getAll = function (req, res) {
    guide.findAll().then((guides) => {
        res.status(200).json(guides);
    });
}
exports.getGuideInfo = function (req, res) {
    var email = req.params.email;
    user.findOne({ where: { email: email } }).then((user) => {
        var uid = user.uid;
        guide.findOne({ where: { user_uid: uid } }).then((guide) => {
            if (guide) {
                res.status(200).json({
                    success: true,
                    message: 'Successfully retrieved guide',
                    guide_info: guide
                });
            }
        }).catch(Error, (err) => {
            res.status(409).json({
                success: false,
                message: 'Error getting guide',
                error: err
            });
        });
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error getting guide',
            error: err
        });
    });
}

exports.addGuide = function (req, res) { //gid automatically created by DB
    var guideData = req.body.guideData;
    var companyData = req.body.companyData;
    location.create({
        building: companyData.building,
        street: companyData.street,
        city: companyData.city,
        zipcode: companyData.zipcode
    }).then((new_location) => {
        company.create({
            companyName: companyData.companyName,
            companyURL: companyData.companyURL,
            location_lid: new_location.lid
        }).then((new_company) => {
            created_company = new_company;
            user.create({
                email: guideData.email,
                password: guideData.password,
                role: 1,
                creation_date: new Date().toLocaleDateString()
            }).then((new_user) => {
                console.log('Successfully added company, location and user...\n' + JSON.stringify(req.body, null, 2));
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
                    company_coid: created_company.coid
                }).then(() => {
                        res.status(200).json({
                            success: true,
                            message: 'Successfully added guide!',
                            first_name: guideData.firstName,
                            last_name: guideData.lastName
                        });
                    })
            })
        })
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error adding guide...',
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