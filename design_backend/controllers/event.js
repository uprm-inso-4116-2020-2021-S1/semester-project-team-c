var db = require('../models');
var event = db.event;

exports.getAll = function(req, res) {
    event.findAll().then((events) => {
        res.status(200).json(events);
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