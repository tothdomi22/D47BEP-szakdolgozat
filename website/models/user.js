const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');

class User extends Model {}

Sensor.init({
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  hashed_password: DataTypes.BLOB,
  salt: DataTypes.BLOB,
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  email_verified: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;