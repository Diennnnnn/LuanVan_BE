"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("phongs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_LP: {
                type: Sequelize.INTEGER,
            },
            
            id_VT: {
                type: Sequelize.INTEGER,
            },
            tenphong: {
                type: Sequelize.STRING,
            },
            trangthai: {
                type: Sequelize.STRING,
            },
            mota: {
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
        await queryInterface.dropTable("phongs")
    },
};