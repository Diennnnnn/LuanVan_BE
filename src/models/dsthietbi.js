"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class dsthietbis extends Model {
        static associate(models){

        }
    }
    dsthietbis.init(
        {
            id_CSVC: DataTypes.INTEGER,
            id_Phong: DataTypes.INTEGER,
            soluong: DataTypes.INTEGER,
            thoigianbatdau: DataTypes. DATEONLY,
        },
        {
            sequelize,
            modelName: "dsthietbis",
        }
    );
    return dsthietbis;
};