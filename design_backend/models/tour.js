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

    return tour;
};
