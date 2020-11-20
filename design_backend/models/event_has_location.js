module.exports = (db, Sequelize) => {
    var event_has_location = db.define('event_has_location', {
        event_eventid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        location_id: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            unique: true
        }
    }, {
        tableName: 'event_has_location',
        timestamps: false
    });

    return event_has_location;
};
