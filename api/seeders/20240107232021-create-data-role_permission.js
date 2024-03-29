'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role_permission', [
      {
        role_id: 1,
        permission_id: 1,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        role_id: 1,
        permission_id: 2,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        role_id: 1,
        permission_id: 3,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        role_id: 1,
        permission_id: 4,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        role_id: 2,
        permission_id: 1,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        role_id: 2,
        permission_id: 5,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        role_id: 2,
        permission_id: 6,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role_permission', null, {});
  },
};
