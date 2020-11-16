module.exports = (db, Sequelize) => {
    var event = db.define('event', {
        eid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.STRING
        },
        meetingPlace: {
            type: Sequelize.STRING
        },
        eventDate: {
            type: Sequelize.DATE
        },
        price: {
            type: Sequelize.STRING
        },
        eventcreatedAt: {
            type: Sequelize.DATE
        },
        eventupdatedAt: {
            type: Sequelize.DATE
        },
    }, {
        tableName: 'event',
        timestamps: false
    });

    return event;
};
