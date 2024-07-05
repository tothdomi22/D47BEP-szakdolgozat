const { DataTypes, Model } = require('sequelize');

module.exports = function(sequelize, Sequelize) {
  const User = sequelize.define('User', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      hashed_password: {
        type: DataTypes.BLOB,
        allowNull: false
      },
      salt: {
        type: DataTypes.BLOB,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allownull: false,
        defaultValue: false
      }
  })
  /*User.prototype.validPassword = function (hashed_password) {
      return this.hashed_password === hashed_password
  }*/

  return User
}