var config = require('../config/configuration');
module.exports = (db, Sequelize) => {
    var guide = db.define('guide', {
        guide_id: {
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
        user_id: {
            type: Sequelize.NUMBER
        },
        company_id: {
            type: Sequelize.NUMBER
        },
        even_archived: {
            type: Sequelize.NUMBER
        }
    }, {
        tableName: 'guide',
        timestamps: false
    });
    guide.associate = (models) => {
        guide.belongsTo(models.company, { as: 'company_id', foreignKey: 'company_id'});
        guide.belongsTo(models.user, { as: 'user_id', foreignKey: 'user_id'});
    };
    return guide;
};