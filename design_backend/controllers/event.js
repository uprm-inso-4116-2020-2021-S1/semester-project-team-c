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

exports.createEvent = function (req, res) {
    var event_location = req.body.event_location;
    var locationData = event_location.location;
    var eventData = event_location.event;

    location.create({
        building: locationData.building,
        street: locationData.street,
        city: locationData.city,
        zipcode: locationData.zipcode
    }).then((event_location) => {
        event.create({
            name: eventData.name,
            type: eventData.type,
            duration: eventData.duration,
            meetingPlace: eventData.meetingPlace,
            eventDate: eventData.eventDate,
            price: eventData.price,
            tour_tid: eventData.tid,
            location_lid: event_location.lid,
            location_city: event_location.city
        }).then((createdEvent) => {
            res.status(200).json({
                success: true,
                message: "Succesfully created event in tour",
                body: createdEvent
            });
        }).catch(Error, (err) => {
            res.status(409).json({
                success: false,
                message: 'Error creating events.',
                error: err
            });
        });
    })
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
        else {
            res.status(400).json({
                success: false,
                message: 'No events in that city'
            })
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