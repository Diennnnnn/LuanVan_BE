"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class loaiphongs extends Model {
        static associate(models){

        }
    }
    loaiphongs.init(
        {
            tenloaiphong: DataTypes.STRING,
            songuoi: DataTypes.INTEGER,
            gia: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "loaiphongs",
        }
    );
    return loaiphongs;
};