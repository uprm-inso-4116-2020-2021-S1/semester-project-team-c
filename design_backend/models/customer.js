module.exports = (db, Sequelize) => {
    var customer = db.define('customer', {
        cid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            unique: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        user_uid: {
            type: Sequelize.NUMBER,
            primaryKey: true
        }
    }, {
        tableName: 'customer',
        timestamps: false
    });

    return customer;
};
