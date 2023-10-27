"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class vitris extends Model {
        static associate(models){

        }
    }
    vitris.init(
        {
            khu: DataTypes.STRING,
            tang: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "vitris",
        }
    );
    return vitris;
};