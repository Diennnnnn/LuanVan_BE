"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("phieudats", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_KH: {
                type: Sequelize.INTEGER,
            },
            id_Phong: {
                type: Sequelize.INTEGER,
            },
            ngaydat: {
                type: Sequelize.DATEONLY,
            },
            check_in: {
                type: Sequelize.DATEONLY,
            },
            check_out: {
                type: Sequelize.DATEONLY,
            },
            songuoi: {
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
        await queryInterface.dropTable("phieudats")
    },
};