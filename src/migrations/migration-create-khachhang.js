"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("khachhangs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            hotenKH: {
                type: Sequelize.STRING,
            },
            ngaysinh: {
                type: Sequelize.DATEONLY,
            },
            gioitinh: {
                type: Sequelize.STRING,
            },
            CMND: {
                type: Sequelize.STRING,
            },
            SDT: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            avt: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("khachhangs")
    },
};