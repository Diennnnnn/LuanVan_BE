"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class nhanviens extends Model {
        static associate(models){

        }
    }
    nhanviens.init(
        {
            hotenNV: DataTypes.STRING,
            ngaysinh: DataTypes.DATEONLY,
            gioitinh: DataTypes.STRING,
            CCCD: DataTypes.STRING,
            SDT: DataTypes.STRING,
            email: DataTypes.STRING,
            diachi: DataTypes.STRING,
            chucvu: DataTypes.STRING,

        },
        {
            sequelize,
            modelName: "nhanviens",
        }
    );
    return nhanviens;
};