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
        var User = models.user;
        var Tour = models.tour;
        attending.belongsTo(Tour, {foreignKey: 'tour_tid', targetKey: 'tid' });
        attending.belongsTo(User, {foreignKey: 'user_uid', targetKey: 'uid' });
        Tour.belongsToMany(User, { as: 'Users', through: 'attending' ,foreignKey: 'tour_tid' });
        User.belongsToMany(Tour, { as: 'Tours', through: 'attending' ,foreignKey: 'user_uid' });
    };

    return attending;
};
