module.exports = (db, Sequelize) => {
    var company = db.define('company', {
        coid: {
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
        companycreatedAt: {
            type: Sequelize.DATE
        },
        location_lid: {
            type: Sequelize.NUMBER,
            primaryKey: true
        }
    }, {
        tableName: 'company',
        timestamps: false
    });

    return company;
};
