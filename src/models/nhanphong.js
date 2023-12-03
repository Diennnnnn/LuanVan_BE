"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class nhanphongs extends Model {
        static associate(models){

        }
    }
    nhanphongs.init(
        {
            ngaynhan: DataTypes.DATE,
            ngaytra: DataTypes.DATE,
            id_pd: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: "nhanphongs",
        }
    );
    return nhanphongs;
};