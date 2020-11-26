module.exports = (db, Sequelize) => {
    var attending = db.define('attending', {
        attending_listid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        tour_tid: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
        user_uid: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
    }, {
        tableName: 'attending_list',
        timestamps: false
    });

    attending.associate = (models) => {
        attending.belongsTo(models.tour, { as: 'tid', foreignKey: 'tour_tid' });
        attending.belongsTo(models.user, { as: 'uid', foreignKey: 'user_uid' });
    };

    return attending;
};
