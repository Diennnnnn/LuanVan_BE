"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class phongs extends Model {
        static associate(models){

        }
    }
    phongs.init(
        {
            id_LP: DataTypes.INTEGER,
            id_VT:DataTypes.INTEGER,
            tenphong: DataTypes.STRING,
            trangthai: DataTypes.STRING,
            mota: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "phongs",
        }
    );
    return phongs;
};