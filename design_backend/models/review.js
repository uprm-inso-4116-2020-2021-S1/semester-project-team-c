module.exports = (db, Sequelize) => {
    var review = db.define('review', {
        rid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        type_of_review: {
            type: Sequelize.NUMBER
        },
        reviewcreatedAt: {
            type: Sequelize.DATE
        },
        user_uid: {
            type: Sequelize.NUMBER
        }
    }, {
        tableName: 'review',
        timestamps: false
    });

    return review;
};
