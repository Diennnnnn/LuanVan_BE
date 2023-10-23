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
            giagoc: DataTypes.INTEGER,
            soluong: DataTypes.INTEGER,
            thoigianmua: DataTypes.DATEONLY
        },
        {
            sequelize,
            modelName: "danhmuccsvcs",
        }
    );
    return danhmuccsvcs;
};