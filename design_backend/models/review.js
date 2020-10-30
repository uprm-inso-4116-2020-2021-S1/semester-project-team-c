module.exports = (db, Sequelize) => {
    var review = db.define('review', {
        rid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            unique: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.NUMBER
        },
        reviewcreatedAt: {
            type: Sequelize.DATE
        },
        customer_cid: {
            type: Sequelize.NUMBER
        },
        event_eid: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
    }, {
        tableName: 'review',
        timestamps: false
    });

    return review;
};
