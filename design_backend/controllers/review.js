var db = require('../models');
var review = db.review;
var user = db.user;
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

exports.getAllReviewsAboutUser = function (req, res) {
    var user_reviewee = req.body.reviewee_uid;
    user_review.findAll({where: {reviewee_uid: user_reviewee}}).then((reviews) => {
        if (reviews) {
            res.status(200).json({
                success: true,
                message: 'Succesfully found reviews about user',
                review: reviews
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding review(s)',
            error: err
        });
    });
}

exports.getAllReviewsAboutUser = function (req, res) {
    var user_reviewer = req.body.reviewer_user_uid
    user_review.findAll({where: {reviewee_uid: user_reviewer}}).then((reviews) => {
        if (reviews) {
            res.status(200).json({
                success: true,
                message: 'Succesfully found reviews by user',
                review: reviews
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding review(s)',
            error: err
        });
    });
}

exports.getAllTourReviews = function (req, res) {
    tour_review.findAll().then((tour_reviews) => {
        res.status(200).json(tour_reviews);
    })
}

exports.getAllReviewsAboutTour = function (req, res) {
    var tour_reviews = req.body.trid;
    tour_review.findAll({where: {trid: tour_reviews}}).then((reviews) => {
        if (reviews) {
            res.status(200).json({
                success: true,
                message: 'Succesfully found reviews about tour',
                review: reviews
            });
        }
    }).catch(Error, (err) => {
        res.status(409).json({
            success: false,
            message: 'Error finding review(s)',
            error: err
        });
    });
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

exports.createUserReview = function(req, res) {
    var userReviewData = req.body.userReviewData;
    var uid = req.params.user_uid;
    var gid = req.params.reviewee_uid;
    review.create({
        type_of_review: 1,
        reviewcreatedAt: new Date().toLocaleDateString,
        user_uid: uid
    }).then((new_review) => {
        console.log('Succesfully added review type...\n' + JSON.stringify(req.body, null, 2));
        user_review.create({
            review_message: userReviewData.review_message,
            stars: userReviewData.stars,
            review_rid: new_review.rid,
            reviewer_user_uid: uid,
            reviewee_uid: gid
        }).then(() => {
            res.status(200).json({
                success: true,
                message: 'Succesfully added user review!',
                review_message: userReviewData.review_message,
                stars: userReviewData.stars
            });
        })
    })
}

exports.createTourReview = function(req, res) {
    var uid = req.params.user_uid;
    var tourReviewData = req.body;
    var tid = red.params.tour_tid;
    review.create({
        type_of_review: 0,
        reviewcreatedAt: new Date().toLocaleDateString,
        user_uid: uid
    }).then((new_review) => {
        console.log('Succesfully added review type...\n' + JSON.stringify(req.body, null, 2));
        tour_review.create({
            reviewcreatedAt: tourReviewData.review_message,
            stars: tourReviewData.stars,
            tour_tid: tid,
            review_rid: new_review.rid,
            review_user_uid: uid
        }).then(() => {
            res.status(200).json({
                success: true,
                message: 'Succesfully added tour review!',
                review_message: tourReviewData.review_message,
                stars: tourReviewData.stars
            });
        })
    })
}

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

