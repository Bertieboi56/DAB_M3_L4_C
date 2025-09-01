module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        FirstName: Sequelize.DataTypes.STRING,
        LastName: Sequelize.DataTypes.STRING,
        Username: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        EncryptedPassword: {
            type: Sequelize.DataTypes.BLOB,
            allowNull: false            
        },
        Salt: {
            type: Sequelize.DataTypes.BLOB,
            allowNull: false            
        },
        Role: {
           type: Sequelize.DataTypes.STRING,
           defaultValue: "User" 
        }
    },{
        timestamps: false
    });
    User.associate = function(models) {
        User.belongsToMany(models.hotel, {through: models.rate})
        User.belongsToMany(models.room, {through: models.reservation})
    };
	return User
}