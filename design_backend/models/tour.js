module.exports = (db, Sequelize) => {
    var tour = db.define('tour', {
        tour_id: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        tour_name: {
            type: Sequelize.STRING
        },
        guide_guide_id: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
        guide_company_id: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
        guide_user_id: {
            type: Sequelize.NUMBER,
            primaryKey: true

        }
    }, {
        tableName: 'tour',
        timestamps: false
    });

    return tour;
};
