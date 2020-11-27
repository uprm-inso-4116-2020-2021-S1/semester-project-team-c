var db = require('../models');
var event = db.event;
var tour = db.tour;
var location = db.location;
var attend = db.attending;


exports.getAll = function (req, res) {
    event.findAll().then((events) => {
        res.status(200).json(events);
    });
}

exports.getAllEventsInTour = function (req, res) {
    var tour_id = req.params.tid;
    event.findAll({ where: { tour_tid: tour_id } }).then(events => {
        if (events) {
            res.status(200).json({
                success: true,
                message: "Succesfully found all events in tour",
                body: events
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding events.',
            error: err
        });
    });
}

exports.getEventByEid = function (req, res) {
    var eid = req.body.eid;
    event.findOne({ where: { eid: eid } }).then((event) => {
        if (event) {
            res.status(200).json({
                success: true,
                message: 'Succesfully found event.',
                event: event
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding event.',
            error: err
        });
    });
}

exports.getEventsByCity = function (req, res) {
    var city = req.params.city;
    event.findAll({ where: { location_city: city } }).then((events) => {
        if (events) {
            res.status(200).json({
                success: true,
                message: 'Succesfully found events',
                event: events
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding events',
            error: err
        });
    });
}

exports.guideDeleteEvent = function (req, res) {
    var eid = req.params.eid
    console.log('Deleting event with id: ' + eid + '...')
    event.destroy({ where: { eid: eid } }).then(() => {
        res.status(200).json({
            success: true,
            message: 'Succesfully deleted event'
        });
    });
}