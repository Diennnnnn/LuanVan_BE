"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("khuyenmais", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            tenKM: {
                type: Sequelize.STRING,
            },
            phantram: {
                type: Sequelize.INTEGER,
            },
            mota: {
                type: Sequelize.STRING,
            },
            start: {
                type: Sequelize.DATEONLY,
            },
            finish: {
                type: Sequelize.DATEONLY,
            },
            dieukien: {
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
        await queryInterface.dropTable("khuyenmais")
    },
};