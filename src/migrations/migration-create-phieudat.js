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
            tongtien: {
                type: Sequelize.INTEGER,
            },
            thanhtoan: {
                type: Sequelize.STRING,
            },
            trangthai: {
                type: Sequelize.STRING,
            },
            ghichu: {
                type: Sequelize.STRING,
            },
            hotennguoio: {
                type: Sequelize.STRING,
            },
            SDT_nguoio: {
                type: Sequelize.STRING,
            },
            CCCD_nguoio: {
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
        await queryInterface.dropTable("phieudats")
    },
};