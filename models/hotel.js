module.exports = (sequelize, Sequelize) => {
    const Hotel = sequelize.define('hotel', {
        Name: Sequelize.DataTypes.STRING,
        Location: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    Hotel.associate = function(models) {
        Hotel.hasMany(models.room);
        Hotel.belongsToMany(models.user, {through: models.rate})
    };
	return Hotel
}