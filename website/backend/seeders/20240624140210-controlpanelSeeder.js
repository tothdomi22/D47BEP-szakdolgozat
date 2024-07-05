'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Controlpanels', [{
        preset: 'default',
       wateringDuration: 10,
       wateringPercent: 50,
       tankDepth: 40 ,
       createdAt: new Date(),
       updatedAt: new Date(),
      }], {});
    


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
