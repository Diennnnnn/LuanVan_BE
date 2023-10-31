"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("nhanviens", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            hotenNV: {
                type: Sequelize.STRING,
            },
            ngaysinh: {
                type: Sequelize.DATEONLY,
            },
            gioitinh: {
                type: Sequelize.STRING,
            },
            CCCD: {
                type: Sequelize.STRING,
            },
            SDT: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            diachi: {
                type: Sequelize.STRING,
            },
            chucvu: {
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
        await queryInterface.dropTable("nhanviens")
    },
};