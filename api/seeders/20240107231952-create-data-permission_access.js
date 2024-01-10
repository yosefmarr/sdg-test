'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permission_access', [
      /* Home -> Dashboard */
      {
        id: 1,
        permission_id: 1,
        access_id: 1,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Settings -> Language */
      {
        id: 2,
        permission_id: 2,
        access_id: 2,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Settings -> Session TimeOut */
      {
        id: 3,
        permission_id: 2,
        access_id: 3,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Settings -> Reset count */
      {
        id: 4,
        permission_id: 2,
        access_id: 4,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Settings -> Assign count */
      {
        id: 5,
        permission_id: 2,
        access_id: 5,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Settings -> Assign count limits */
      {
        id: 6,
        permission_id: 2,
        access_id: 6,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Devices -> List all registered devices */
      {
        id: 7,
        permission_id: 3,
        access_id: 7,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Devices -> Add new device */
      {
        id: 8,
        permission_id: 3,
        access_id: 8,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Devices -> Remove device */
      {
        id: 9,
        permission_id: 3,
        access_id: 9,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Devices -> Modify device */
      {
        id: 10,
        permission_id: 3,
        access_id: 10,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Devices -> Assign device */
      {
        id: 11,
        permission_id: 3,
        access_id: 11,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Admin -> List all registered users */
      {
        id: 12,
        permission_id: 4,
        access_id: 12,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Admin -> Add user */
      {
        id: 13,
        permission_id: 4,
        access_id: 13,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Admin -> Remove user */
      {
        id: 14,
        permission_id: 4,
        access_id: 14,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Admin -> Modify user */
      {
        id: 15,
        permission_id: 4,
        access_id: 15,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Basic Settings -> Language */
      {
        id: 16,
        permission_id: 5,
        access_id: 2,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Basic Settings -> Assign count limits */
      {
        id: 17,
        permission_id: 5,
        access_id: 6,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Basic Devices -> List all registered devices */
      {
        id: 18,
        permission_id: 6,
        access_id: 7,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Basic Devices -> Assign device */
      {
        id: 19,
        permission_id: 6,
        access_id: 11,
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permission_access', null, {});
  },
};
