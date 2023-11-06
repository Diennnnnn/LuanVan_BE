"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class hinhanhPhongs extends Model {
        static associate(models){

        }
    }
    hinhanhPhongs.init(
        {
            hinhanh: DataTypes.STRING,
            id_Phong: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "hinhanhPhongs",
        }
    );
    return hinhanhPhongs;
};