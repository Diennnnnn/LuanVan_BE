"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("chitietSDDVs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_PD: {
                type: Sequelize.INTEGER,
            },
            id_DV: {
                type: Sequelize.INTEGER,
            },
            solansudung: {
                type: Sequelize.INTEGER,
            },
            soluong: {
                type: Sequelize.INTEGER,
            },
            thanhtien: {
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
        await queryInterface.dropTable("chitietSDDVs")
    },
};