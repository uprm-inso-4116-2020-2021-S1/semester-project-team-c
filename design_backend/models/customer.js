module.exports = (db, Sequelize) => {
    var customer = db.define('customer', {
        custome_id: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.NUMBER,
            primaryKey: true
        }
    }, {
        tableName: 'customer',
        timestamps: false
    });

    return customer;
};
