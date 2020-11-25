var db = require('../models');
var event = db.event;
var tour = db.tour;
var location = db.location;
var attending = db.attending_list;

exports.getAll = function (req, res) {
    event.findAll().then((events) => {
        res.status(200).json(events);
    });
}

exports.createEvent = function (req, res) {
    var locationID = -1, locationCity = " ";
    var new_tour = req.body.tour;
    var events = req.body.tour.events;
    var tempTour;
    tour.create({
        tour_name: new_tour.tour_name,
        guide_gid: new_tour.gid,
        guide_company_coid: new_tour.coid,
        guide_user_uid: new_tour.uid
    }).then((createdTour) => {
        tempTour = createdTour;
        
        var i = 1;
        for (let content in events) {
            var data = events[content]

            
            //Find a way to pass lid and city
            if (content.split(" ")[0] == 'location') {
                location.create({
                    building: data["building"],
                    street: data["street"],
                    city: data["city"],
                    zipcode: data["zipcode"]
                }).then((event_location) => {
                    locationID = event_location.lid,
                    locationCity = event_location.city
                    
                }).catch(Error, (err) => {
                    res.status(409).json({
                        success: false,
                        message: 'Error finding events.',
                        error: err
                    });
                });
            }
            if (content.split(" ")[0] == 'event') {
                // console.log(locationID)
                event.create({
                    name: data["name"],
                    type: data["type"],
                    duration: data["duration"],
                    meetingPlace: data["meetingPlace"],
                    eventDate: data["eventDate"],
                    price: data["price"],
                    tour_tid: createdTour.tid,
                    location_lid: locationID,
                    location_city: locationCity
                }).catch(Error, (err) => {
                    res.status(409).json({
                        success: false,
                        message: 'Error creating events.',
                        error: err
                    });
                });
            }
        };
    }).then(() => {
        attending.create({
            tour_tid: tempTour.tid,
            user_uid: new_tour.uid
        })
    }).then(() => {
        res.status(200).json({
            success: true,
            message: "Succesfully created tour",
        });
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding events.',
            error: err
        });
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

exports.deleteEventByEid = function (eid) {
    console.log('Deleting event with id: ' + eid + '...')
    return event.destroy({ where: { eid: eid } });
}

exports.deleteEventByName = function (name) {
    var name = event.name
    console.log('Delete event with name: ' + name + '...')
    return event.deleteEventByEid({ where: { name: name } });
}