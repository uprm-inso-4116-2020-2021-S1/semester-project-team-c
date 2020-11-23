module.exports = (db, Sequelize) => {
    var event_has_location = db.define('event_has_location', {
        event_eid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        location_lid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            unique: true
        },
        location_city: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            unique: true
        },
    }, {
        tableName: 'event_has_location',
        timestamps: false
    });

    return event_has_location;
};
