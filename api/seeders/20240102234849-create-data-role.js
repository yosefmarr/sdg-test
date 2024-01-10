'use strict';
const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role', [
      {
        id: 1,
        name: 'Admin',
        description: 'Administrator role with full privileges',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'User',
        description: 'Standard user with limited privileges',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role', null, {});
  },
};
