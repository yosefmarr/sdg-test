'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_role', [
      {
        user_id: 1,
        role_id: 1,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_role', null, {});
  },
};
