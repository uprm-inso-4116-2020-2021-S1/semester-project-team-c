module.exports = (db, Sequelize) => {
    var tour_review = db.define('tour_review', {
        tour_review_id: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        review_message: {
            type: Sequelize.STRING
        },
        stars: {
            type: Sequelize.NUMBER
        },
        tour_id: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
        review_id: {
            type: Sequelize.NUMBER,
            primaryKey: true

        },
        review_user_id: {
            type: Sequelize.NUMBER,
            primaryKey: true
        }
    }, {
        tableName: 'tour_review',
        timestamps: false
    });

    return tour_review;
};
