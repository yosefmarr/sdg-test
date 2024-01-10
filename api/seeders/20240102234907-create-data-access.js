'use strict';
const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('access', [
      /* Home */
      {
        id: 1,
        action: 'dashboard',
        description: 'Provides access to view the dashboard',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Settings */
      {
        id: 2,
        action: 'language',
        description: 'Allows the user to change the application language',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 3,
        action: 'session-timeout',
        description:
          'Enables modification of session timeout settings, ensuring optimal security',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 4,
        action: 'reset-count',
        description: 'Authorizes the user to reset the count in the dashboard',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 5,
        action: 'assign-count',
        description:
          'Grants privileges to manually set or adjust count values on the dashboard',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 6,
        action: 'assign-count-limits',
        description:
          'Permits the user to define or modify upper and lower limits for dashboard counts',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Devices */
      {
        id: 7,
        action: 'list-devices',
        description: 'Retrieves a list of all registered devices',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 8,
        action: 'add-device',
        description: 'Registers a new device to the system',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 9,
        action: 'remove-device',
        description: "Removes a specified device from the system's registry",
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 10,
        action: 'modify-device',
        description:
          'Enables the modification of details for an existing device in the system',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 11,
        action: 'assign-device',
        description: 'Enables the user to assing the device to a certain mode',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      /* Admin */
      {
        id: 12,
        action: 'list-users',
        description: 'Retrieves a list of all registered users',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 13,
        action: 'add-user',
        description: 'Incorporates a new user into the system',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 14,
        action: 'remove-user',
        description: 'Removes a user access from the system',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
      {
        id: 15,
        action: 'modify-user',
        description: 'Allows for the editing of an existing user',
        created_by: 1,
        created_at: new Date(),
        updated_by: 1,
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('access', null, {});
  },
};
