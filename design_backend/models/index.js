var config = require('../config/configuration').development;
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.name, config.user, config.password, config.options);
var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var db = {};

sequelize.authenticate().then(() => {
    console.log('Successfully connected to the DB...');
}).catch((err) => {
    console.log('Unable to connect to the local DB...', err);
});

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach(function(file) {
        var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db