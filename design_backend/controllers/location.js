var db = require('../models');
var location = db.location;


exports.getall = function(req,res) {
    location.findAll().then((locations) => {
        res.status(200).json(locations);
    });
}

