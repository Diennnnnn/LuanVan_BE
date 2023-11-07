module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('khachhangs', 'avt', {
                type: Sequelize.BLOB('long'),
                allowNull: true,
            })
        ])
    }
}