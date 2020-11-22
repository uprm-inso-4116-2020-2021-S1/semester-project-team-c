module.exports = (db, Sequelize) => {
    var company = db.define('company', {
        company_id: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        companyName: {
            type: Sequelize.STRING
        },
        companyURL: {
            type: Sequelize.STRING
        },
        location_id: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
        companycreatedAt: {
            type: Sequelize.DATE
        }
    }, {
        tableName: 'company',
        timestamps: false
    });

    return company;
};
