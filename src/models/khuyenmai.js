"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class khuyenmais extends Model {
        static associate(models){

        }
    }
    khuyenmais.init(
        {
            tenKM: DataTypes.STRING,
            phantram: DataTypes.INTEGER,
            mota: DataTypes.STRING,            
            start: DataTypes.DATEONLY,
            finish: DataTypes.DATEONLY,
            dieukien: DataTypes.STRING,   
        },
        {
            sequelize,
            modelName: "khuyenmais",
        }
    );
    return khuyenmais;
};