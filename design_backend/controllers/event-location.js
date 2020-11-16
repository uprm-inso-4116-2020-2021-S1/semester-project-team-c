var db = require('../models');
var location = db.location;
var event = db.event;
var location_event = db.event_has_location;


exports.getEventLocations() = function(req, res){ //Searching for events with all its locations
    var eventID = req.body.name;
    location_event.findAll({ where: { event_eid: eventID }}).then((locations) => {
        location.findAll({where: { lid: locations.location_lid}}).then((allLocations) => {
            res.status(200).json({
                success: true,
                message: 'Successfully retrieved all locations',
                locations: allLocations
            });
        })
    })   
}

exports.getLocationWithEvents() = function(req, res){
    var locationCity = req.body.city;
    location_event.findAll({ where: { location_city: locationCity }}).then((events) => {
        event.findAll({where: { eid: events.event_eid}}).then((allEvents) => {
            res.status(200).json({
                success: true,
                message: 'Successfully retrieved all events',
                locations: allEvents
            });
        })
    })   
}