module.exports = (db, Sequelize) => {
    var attending = db.define('attending', {
        attending_listid: {
            type: Sequelize.NUMBER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        tour_id: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
    }, {
        tableName: 'attending_list',
        timestamps: false
    });

    return attending;
};
