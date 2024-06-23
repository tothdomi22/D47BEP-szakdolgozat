'use strict';

//npx sequelize-cli seed:generate --name sensorSeeder
//npx sequelize-cli db:seed:all


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sensors', [{
      temperature: 24.3,
      humidity: 59.3,
      moisture: 6,
      waterLevel: 96,
      light: 299, 
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
