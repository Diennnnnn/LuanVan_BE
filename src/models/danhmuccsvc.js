"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class danhmuccsvcs extends Model {
        static associate(models){

        }
    }
    danhmuccsvcs.init(
        {
            tenCSVC: DataTypes.STRING,
            mota: DataTypes.STRING,
            giagoc: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "danhmuccsvcs",
        }
    );
    return danhmuccsvcs;
};