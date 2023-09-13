const {Sequelize} = require('sequelize');
const config = require('./index');

const databaseConnection = new Sequelize(config.sequelizeDbName, config.sequelizeDbUser, config.sequelizeDbPassword, {
    host: config.sequelizeDbHost,
    dialect: config.sequelizeDbDialect
});

const testDbConnection = async () => {
    try {
        await databaseConnection.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};


module.exports = { databaseConnection: databaseConnection, testDbConnection };