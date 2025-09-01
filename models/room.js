module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define('room', {
        PricePerDay: Sequelize.DataTypes.DECIMAL(10,2),
        Capacity: Sequelize.DataTypes.INTEGER,
    },{
        timestamps: false
    });
    Room.associate = function(models) {
        Room.belongsTo(models.hotel)
        Room.belongsToMany(models.user, {through: models.reservation})
    };
	return Room
}
