'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Marcos',
        email: 'marcos@email.com',
        password: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Willian',
        email: 'willian@email.com',
        password: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
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
