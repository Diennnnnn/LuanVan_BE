module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('hinhanhPhongs', 'hinhanh', {
                type: Sequelize.BLOB('long'),
                allowNull: true,
            })
        ])
    }
}