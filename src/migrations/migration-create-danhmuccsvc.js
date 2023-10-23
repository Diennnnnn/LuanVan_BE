"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("danhmuccsvcs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            tenCSVC: {
                type: Sequelize.STRING,
            },
            giagoc: {
                type: Sequelize.INTEGER,
            },
            soluong: {
                type: Sequelize.INTEGER,
            },
            thoigianmua: {
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
        await queryInterface.dropTable("danhmuccsvcs")
    },
};