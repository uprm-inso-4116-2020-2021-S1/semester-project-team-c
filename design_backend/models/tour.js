module.exports = (db, Sequelize) => {
    var tour = db.define('tour', {
        tid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        tour_name: {
            type: Sequelize.STRING
        },
        guide_gid: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
        guide_company_coid: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
        guide_user_uid: {
            type: Sequelize.NUMBER,
            primaryKey: true
        }
    }, {
        tableName: 'tour',
        timestamps: false
    });
    tour.associate = (models) => {
        tour.belongsTo(models.guide, { as: 'gid', foreignKey: 'guide_gid' });
        tour.belongsTo(models.guide, { as: 'company_coid', foreignKey: 'guide_company_coid' });
        tour.belongsTo(models.guide, { as: 'user_uid', foreignKey: 'guide_user_uid' });
        
    };

    return tour;
};
