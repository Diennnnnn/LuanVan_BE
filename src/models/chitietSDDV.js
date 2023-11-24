"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class chitietSDDVs extends Model {
        static associate(models){

        }
    }
    chitietSDDVs.init(
        {
            id_PD: DataTypes.INTEGER,
            id_DV: DataTypes.INTEGER,
            solansudung: DataTypes.INTEGER,
            soluong: DataTypes.INTEGER,
            thanhtien: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "chitietSDDVs",
        }
    );
    return chitietSDDVs;
};