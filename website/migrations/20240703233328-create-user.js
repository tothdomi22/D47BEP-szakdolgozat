'use strict';

const sequelize = require('../config/config');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      hashed_password: {
        type: Sequelize.BLOB,
        allowNull: false
      },
      salt: {
        type: Sequelize.BLOB,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      isAdmin: {
          type: Sequelize.BOOLEAN,
          allowNull: false
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
    await queryInterface.dropTable('Users');
  }
};