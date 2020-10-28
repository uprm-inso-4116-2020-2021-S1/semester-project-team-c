var config = require('../config/config');
module.exports = (db, Sequelize) => {
    var user = db.define('user', {
        uid: {
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
        createdAt: {
            type: Sequelize.DATE
        }
    }, {
        tableName: 'user',
        timestamps: false
    });

    return user;
};