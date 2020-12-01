var db = require('../models');
var event = db.event;
var tour = db.tour;
var location = db.location;
var attend = db.attending;
var user = db.user;
var guide = db.guide;



exports.createTour = function (req, res) {
    var new_tour = req.body.tour;
    var tempTour;
    tour.create({
        tour_name: new_tour.tour_name,
        guide_gid: new_tour.gid,
        guide_company_coid: new_tour.coid,
        guide_user_uid: new_tour.uid
    }).then((createdTour) => {
        tempTour = createdTour;
        attend.create({
            tour_tid: createdTour.tid,
            user_uid: new_tour.uid
        })
    }).then(() => {
        res.status(200).json({
            success: true,
            message: "Succesfully created tour",
            tourInfo: tempTour
        });
    })
}

exports.getTourInfo = function (req, res) {
    var tid = req.params.tid;
    tour.findOne({where: {tid : tid}}).then((foundTour) => {
        if(foundTour){

            res.status(200).json({
                success: true,
                message: "Succesfully found tour",
                tourInfo: foundTour
            });
        }
        else{
            res.status(404).json({
                success: false,
                message: "No tour found"
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error deleting locations',
            error: err
        });
    });
}

exports.deleteTour = function (req, res) {
    var tid = req.params.tid;
    var locationIDarr = [];
    var i = 0;
    event.findAll({ where: { tour_tid: tid } }).then((events) => {
        for (let e in events) {
            var data = events[e]
            locationIDarr[i] = data["location_lid"];
            i++;
        }
        location.destroy({
            where: { lid: locationIDarr }
        }).catch(Error, (err) => {
            res.status(409).json({
                success: false,
                message: 'Error deleting locations',
                error: err
            });
        });
    }).then(() => {
        tour.destroy({
            where: { tid: tid }
        }).catch(Error, (err) => {
            res.status(409).json({
                success: false,
                message: 'Error deleting tours',
                error: err
            });
        });
    }).then(() => {
        res.status(200).json({
            success: true,
            message: "Succesfully deleted tour",
        });
    })
}

exports.getGuideTours = function (req, res) {
    var guide_id = req.params.gid;

    tour.findAll({ where: { guide_gid: guide_id } }).then((tours) => {
        if (tours) {
            res.status(200).json({
                success: true,
                message: 'Successfully retrieved tours',
                allTours: tours
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error getting tours',
            error: err
        });
    });
}

exports.getTourGuides = function (req, res) {
    var tid = req.params.tid;
    var guide_company_coid = req.params.coid;
    tour.findOne({ where: { tid: tid, guide_company_coid: guide_company_coid } }).then((Tour) => {
        Tour.getUsers({ where: { role: 1 } }).then((userList) => {
            var guideTemp = [];
            for (let g in userList) {
                var data = userList[g]
                var test = guide.findOne({ where: { user_uid: data["uid"] } });
                guideTemp.push(test);
            }
            return Promise.all(guideTemp);
        }).then((results) => {
            res.status(200).json({
                success: true,
                message: 'Successfully retrieved guides',
                tourGuides: results
            });
        })
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error getting guides',
            error: err
        });
    });
}

exports.toursAttending = function (req, res) {
    var uid = req.params.uid
    user.findOne({ where: { uid: uid } }).then((User) => {
        if (User) {
            User.getTours().then((results) => {

                res.status(200).json({
                    success: true,
                    message: 'Successfully retrieved tours',
                    allTours: results
                });
            })
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error getting tours',
            error: err
        });
    });
}