"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class hoadons extends Model {
        static associate(models){

        }
    }
    hoadons.init(
        {
            ngaylapHD: DataTypes.DATE,
            tongtien: DataTypes.INTEGER,
            id_KH: DataTypes.INTEGER,
            id_NV: DataTypes.INTEGER,
            id_PD: DataTypes.INTEGER

        },
        {
            sequelize,
            modelName: "hoadons",
        }
    );
    return hoadons;
};