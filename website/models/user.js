const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');

module.exports = function(sequelize, Sequelize) {
  const User = sequelize.define('User', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING,
          allowNull: true,
          notEmpty: true,
      },
  })
  User.prototype.validPassword = function (password) {
      return this.password === password
  }

  return User
}