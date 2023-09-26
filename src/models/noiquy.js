"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class noiquys extends Model {
        static associate(models){

        }
    }
    noiquys.init(
        {
            mota: DataTypes.STRING,
            motaEN: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "noiquys",
        }
    );
    return noiquys;
};