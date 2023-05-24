const { DataTypes } = require('sequelize');
const sequelize  = require('../config/db')

const User = sequelize.define('users', {
	userId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		field: 'user_id'
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'first_name'
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'last_name'
	},
    email: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'email'
	},
    password: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'password'
	},
    role: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'role'
	},
}, {
  // Other model options go here
	sequelize, 
    createdAt: false,
    updatedAt: false
});

sequelize.sync({ force: false }).then(() => {
  console.log(`Tables Users created!`);
});

module.exports = User