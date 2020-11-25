var config = module.exports;
require('dotenv').config();

config.keys = {
    secret: '/%/%/SECRET-KEY/%/%/'
};
config.accessLevels = {
    customer: 'customer',
    guide: 'guide',
};
config.development = {
    name: process.env.DB_DBNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    options: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mariadb',
        dialectOptions: {
            useUTC: true,
            timezone: 'Etc/GMT0'
        }
    }
}; 