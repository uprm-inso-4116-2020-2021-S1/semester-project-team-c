var db = require('../models');
var event = db.event;
var tour = db.tour;
var attending = db.attending_list;

exports.getAll = function(req, res) {
    event.findAll().then((events) => {
        res.status(200).json(events);
    });
}

exports.createEvent = function(req, res){
    var new_tour = req.body.tour;
    console.log(JSON.stringify(new_tour.gid, null, 2));
    tour.create({
        tour_name: new_tour.tour_name,
        guide_gid: new_tour.gid,
        guide_company_coid: new_tour.company_coid,
        guide_user_uid: new_tour.user_id
    }).then((createdTour) => {
        console.log(createdTour)
        for(var i=0; i < new_tour.events.length; i++){
            console.log(new_tour.events[i]);
        }
    })
}
exports.getAllEventsInTour = function (req, res) {
    var tour_id = req.params.tid;
    event.findAll({where: { tour_tid: tour_id }}).then(events => {
        if(events){
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
    event.findOne({where: {eid : eid}}).then((event) => {
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
    return event.destroy({ where: {eid : eid}});
}

exports.deleteEventByName = function(name) {
    var name = event.name
    console.log('Delete event with name: ' + name + '...')
    return event.deleteEventByEid({ where: {name : name}});
}