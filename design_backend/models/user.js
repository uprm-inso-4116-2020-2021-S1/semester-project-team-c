var config = require('../config/configuration');
module.exports = (db, Sequelize) => {
    var user = db.define('user', {
        uid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.NUMBER,
            defaultValue: 1
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
