var db = require('../models');
var event = db.event;
var tour = db.tour;
var location = db.location;
var attend = db.attending;

exports.createTour = function (req, res) {
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
        for (let content in events) {
            let data = events[content];
            var locationData = data["location"];
            var eventData = data["event"];
            location.create({
                building: locationData["building"],
                street: locationData["street"],
                city: locationData["city"],
                zipcode: locationData["zipcode"]
            }).then((event_location) => {
                event.create({
                    name: eventData["name"],
                    type: eventData["type"],
                    duration: eventData["duration"],
                    meetingPlace: eventData["meetingPlace"],
                    eventDate: eventData["eventDate"],
                    price: eventData["price"],
                    tour_tid: createdTour.tid,
                    location_lid: event_location.lid,
                    location_city: event_location.city
                }).catch(Error, (err) => {
                    res.status(409).json({
                        success: false,
                        message: 'Error creating events.',
                        error: err
                    });
                });
            })
        }
    }).then(() => {
        attend.create({
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
            message: 'Error creating events.',
            error: err
        });
    });
}