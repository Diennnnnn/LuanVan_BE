"use strict";

const { DATEONLY } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("dsthietbis", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_CSVC: {
                type: Sequelize.INTEGER,
            },
            id_Phong: {
                type: Sequelize.INTEGER,
            },
            soluong: {
                type: Sequelize.INTEGER,
            },
            thoigianbatdau: {
                type: Sequelize.DATEONLY,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
              },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("dsthietbis")
    },
};