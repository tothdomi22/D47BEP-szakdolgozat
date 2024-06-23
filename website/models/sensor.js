/*

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sensor extends Model {
 
    static associate(models) {
      // define association here
    }
  }
  Sensor.init({
    temperature: DataTypes.FLOAT,
    humidity: DataTypes.FLOAT,
    moisture: DataTypes.INTEGER,
    waterLevel: DataTypes.INTEGER,
    light: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sensor',
  });
  return Sensor;
};
*/

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');

class Sensor extends Model {}

Sensor.init({
  temperature: DataTypes.FLOAT,
    humidity: DataTypes.FLOAT,
    moisture: DataTypes.INTEGER,
    waterLevel: DataTypes.INTEGER,
    light: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Sensor',
});

module.exports = Sensor;