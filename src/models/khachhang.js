"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class khachhangs extends Model {
        static associate(models){

        }
    }
    khachhangs.init(
        {
            hotenKH: DataTypes.STRING,
            ngaysinh: DataTypes.DATEONLY,
            gioitinh: DataTypes.STRING,
            CMND: DataTypes.STRING,
            SDT: DataTypes.STRING,
            email: DataTypes.STRING,
            avt: DataTypes.STRING,

        },
        {
            sequelize,
            modelName: "khachhangs",
        }
    );
    return khachhangs;
};