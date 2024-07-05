'use strict';

//npx sequelize-cli model:generate --name Sensor --attributes temperature:float, humidity:float, moisture:integer, waterLevel:integer, light:integer
//npx sequelize-cli db:migrate

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sensors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      temperature: {
        type: Sequelize.FLOAT
      },
      humidity: {
        type: Sequelize.FLOAT
      },
      moisture: {
        type: Sequelize.INTEGER
      },
      waterLevel: {
        type: Sequelize.INTEGER
      },
      light: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sensors');
  }
};