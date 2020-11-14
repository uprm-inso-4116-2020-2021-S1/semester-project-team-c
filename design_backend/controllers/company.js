var db = require('../models');
var company = db.company;


exports.getall = function(req,res) {
    company.findAll().then((companies) => {
        res.status(200).json(companies);
    });
}

