var db = require('../models');
var review = db.review;
var user_review = db.review_for_user;
var tour_review = db.tour_review;
var customer = db.customer;
var config = require('../config/config');
var request = require('request');
const { DatabaseError } = require('sequelize/types');


exports.getAllReviews = function (req, res) {
    review.findAll().then((reviews) => {
        res.status(200).json(reviews);
    });
}

exports.getAllUserReviews = function (req, res) {
    user_review.findAll().then((user_reviews) => {
        res.status(200).json(user_reviews);
    })
}

exports.getAllTourReviews = function (req, res) {
    tour_review.findAll().then((tour_reviews) => {
        res.status(200).json(tour_reviews);
    })
}

exports.getReviewByRid = function (req, res) {
    var review_id = req.body.rid;
    review.findOne({where: {review_id : review_id}}).then((review) => {
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

exports.getUserReviewByRfuid = function (req, res) {
    var user_review_id = req.body.rfuid;
    user_review.findOne({where: {user_review_id : user_review_id}}).then((user_review) => {
        if (user_review) {
            res.status(200).json({
                success: true,
                message: 'Succesfully found user review',
                review: review
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding user review',
            error: err
        });
    });
}

exports.getTourReviewByTrid = function (req, res) {
    var tour_review_id = req.body.trid;
    tour_review.findOne({where: {tour_review_id : tour_review_id}}).then((tour_review) => {
        if (tour_review) {
            res.status(200).json({
                success: true,
                message: 'Succesfully found tour review',
                review: review
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding tour review',
            error: err
        });
    });
}

// exports.createReview = function(req, res) {
//     var reviewData = req.body
//     review.create({
//         email: customer.email,
//         password: customer.email,
//         role: customer.role,
//         creation_date: new Date().toLocaleDateString
//     }).then((new_review) => {
//         console.log("New review id" + JSON.stringify(new_review, null, 2));
//         console.log('Successfully added new review...\n' + JSON.stringify(req.body, null, 2));
//         review.create({
//             customer_cid: reviewData.customer_cid,
//             event_eid: reviewData.event_eid,
//             event_eid: reviewData.event_eid
//         })
//     }).then(() => {
//         res.status(200).json({
//             success: true,
//             message: 'Successfully added your review!',
//             rid: rid
//         });
//     }).catch(Error, (err) => {
//         res.status(409).json({
//             success: false,
//             message: 'Error adding your review...',
//             error: err
//         });
//     });
// }

exports.deleteReviewByRid = function (rid){
    console.log('Deleting rid with id: ' + rid + '...')
    return review.destroy({ where: { rid: rid } });
}

exports.deleteUserReviewsByRfuid = function (rfuid){
    console.log('Deleting rfuid with id: ' + rfuid + '...')
    return user_review.destroy({ where: { rfuid: rfuid } });
}

exports.deleteTourReviewsByTrid = function (trid){
    console.log('Deleting rfuid with trid: ' + trid + '...')
    return tour_review.destroy({ where: { trid: trid } });
}

