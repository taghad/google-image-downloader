const { DataTypes } = require("sequelize");
const { databaseConnection } = require("../config/database.config");

const Search = databaseConnection.define(
    "search", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        query: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: databaseConnection.literal('CURRENT_TIMESTAMP'),
        },
        downloadLimit: {
            type: DataTypes.INTEGER,
        },
    }
)

Search.sync().then(() => {
    console.log("Search Model synced");
});

module.exports = Search;