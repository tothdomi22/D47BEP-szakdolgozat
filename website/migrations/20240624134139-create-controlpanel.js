'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Controlpanels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preset: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      wateringDuration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      wateringPercent: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tankDepth: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Controlpanels');
  }
};