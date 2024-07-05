const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');

  class Controlpanel extends Model {};
 
  Controlpanel.init({
    preset: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    wateringDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wateringPercent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tankDepth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Controlpanel',
  });

  module.exports = Controlpanel


