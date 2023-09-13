const {DataTypes} = require("sequelize");
const {databaseConnection} = require("../config/database.config");
const {static} = require("express");

const Image = databaseConnection.define(
    "image", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        image: {
            type: DataTypes.BLOB('long'), // <- type for image ( database :postgresql )
            allowNull: true
        },
        url: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: databaseConnection.literal('CURRENT_TIMESTAMP'),
        },
    }
);

Image.sync().then(() => {
    console.log("Image Model synced");
});

module.exports = Image;