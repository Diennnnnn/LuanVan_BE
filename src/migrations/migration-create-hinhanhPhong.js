"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("hinhanhPhongs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            hinhanh: {
                type: Sequelize.STRING,
            },
            id_Phong: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("hinhanhPhongs")
    },
};