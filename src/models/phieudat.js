"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class phieudats extends Model {
        static associate(models){

        }
    }
    phieudats.init(
        {
            id_KH: DataTypes.INTEGER,
            id_Phong: DataTypes.INTEGER,
            ngaydat: DataTypes.DATEONLY,
            check_in: DataTypes.DATEONLY,
            check_out: DataTypes.DATEONLY,
            songuoi: DataTypes.INTEGER,

        },
        {
            sequelize,
            modelName: "phieudats",
        }
    );
    return phieudats;
};