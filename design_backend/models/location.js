module.exports = (db, Sequelize) => {
    var location = db.define('location', {
        lid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        building: {
            type: Sequelize.STRING
        },
        street: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        zipcode: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'location',
        timestamps: false
    });

    return location;
};
