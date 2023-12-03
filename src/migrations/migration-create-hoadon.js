"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("hoadons", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            ngaylapHD: {
                type: Sequelize.DATE,
            },
            tongtien: {
                type: Sequelize.INTEGER,
            },
            id_KH: {
                type: Sequelize.INTEGER,
            },
            id_NV: {
                type: Sequelize.INTEGER,
            },
            id_PD: {
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
        await queryInterface.dropTable("hoadons")
    },
};