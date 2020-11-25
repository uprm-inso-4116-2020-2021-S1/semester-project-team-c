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
        tour_tid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
        },
        location_lid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
        },
        location_city: {
            type: Sequelize.NUMBER,
            primaryKey: true,

        },
        

        event_archived: {
            type: Sequelize.NUMBER
        }
    }, {
        tableName: 'event',
        timestamps: false
    });
    event.associate = (models) => {
        event.belongsTo(models.tour, { as: 'tid', foreignKey: 'tour_tid' });
        event.belongsTo(models.location, { as: 'lid', foreignKey: 'location_lid' });
        event.belongsTo(models.location, { as: 'city', foreignKey: 'location_city' });

    };

    return event;
};
