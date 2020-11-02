var db = require('../models');
var review = db.review;
var config = require('../config/config');
var request = require('request');
const { DatabaseError } = require('sequelize/types');


exports.getAll = function(req, res) {
    review.findAll().then((reviews) => {
        res.status(200).json(reviews);
    });
}

exports.addReview = function(reviewData) {
    console.log('Succesfully added your review...\n' + JSON.stringify(reviewData, null, 2));
    return review.create({
        email: userData.email,
        password: userData.email,
        reviewcreatedAt: new Date().toLocaleDateString(),
        role: userData.role
        // event_eid: ????
    })
}