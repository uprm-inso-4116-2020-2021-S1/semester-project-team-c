module.exports = (db, Sequelize) => {
    var review_for_user = db.define('review_for_user', {
        rfuid: {
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
        review_rid: {
            type: Sequelize.NUMBER
        },
        review_user_uid: {
            type: Sequelize.NUMBER
        },
        reviewee_uid: {
            type: Sequelize.NUMBER
        }
    }, {
        tableName: 'review_for_user',
        timestamps: false
    });

    return review_for_user;
};
