var db = require('../models');
var review = db.review;
var customer = db.customer;
var config = require('../config/config');
var request = require('request');
const { DatabaseError } = require('sequelize/types');


exports.getAll = function(req, res) {
    review.findAll().then((reviews) => {
        res.status(200).json(reviews);
    });
}

exports.getReviewByRid = function (req, res) {
    var rid = req.body.rid;
    review.findOne({where: {rid : rid}}).then((review) => {
        if (review) {
            res.status(200).json({
                success: true,
                message: 'Succesfully found review',
                review: review
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding review',
            error: err
        });
    });
}

exports.addReview = function(req, res) {
    var reviewData = req.body
    review.create({
        email: customer.email,
        password: customer.email,
        role: customer.role,
        creation_date: new Date().toLocaleDateString
    }).then((new_review) => {
        console.log("New review id" + JSON.stringify(new_review, null, 2));
        console.log('Successfully added new review...\n' + JSON.stringify(req.body, null, 2));
        review.create({
            customer_cid: reviewData.customer_cid,
            event_eid: reviewData.event_eid,
            event_eid: reviewData.event_eid
        })
    }).then(() => {
        res.status(200).json({
            success: true,
            message: 'Successfully added your review!',
            rid: rid
        });
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error adding your review...',
            error: err
        });
    });
}

