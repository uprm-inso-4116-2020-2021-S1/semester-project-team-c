var config = require('../config/config');
module.exports = (db, Sequelize) => {
    var guide = db.define('guide', {
        gid: {
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
        phoneNumber: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        facebook: {
            type: Sequelize.STRING
        },
        twitter: {
            type: Sequelize.STRING
        },
        youtube: {
            type: Sequelize.STRING
        },
        instagram: {
            type: Sequelize.STRING
        },
        user_uid: {
            type: Sequelize.NUMBER
        },
        company_coid: {
            type: Sequelize.NUMBER
        }
    }, {
        tableName: 'guide',
        timestamps: false
    });
    guide.associate = (models) => {
        guide.belongsTo(models.company, { as: 'coid', foreignKey: 'company_coid'});
        guide.belongsTo(models.user, { as: 'uid', foreignKey: 'user_uid'});
    };
    return guide;
};