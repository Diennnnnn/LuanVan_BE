"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class dichvus extends Model {
        static associate(models){

        }
    }
    dichvus.init(
        {
            tenDV: DataTypes.STRING,
            gia: DataTypes.INTEGER,
            DVT: DataTypes.INTEGER,
            ghichu: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "dichvus",
        }
    );
    return dichvus;
};