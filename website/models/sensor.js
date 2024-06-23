'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sensor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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