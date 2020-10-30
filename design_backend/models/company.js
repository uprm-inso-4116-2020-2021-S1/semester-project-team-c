module.exports = (db, Sequelize) => {
    var company = db.define('company', {
        coid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            unique: true
        },
        companyname: {
            type: Sequelize.STRING
        },
        companyurl: {
            type: Sequelize.STRING
        },
        location_lid: {
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
