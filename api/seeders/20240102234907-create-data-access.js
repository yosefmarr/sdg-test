'use strict';
const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM \`user\` ORDER BY id ASC LIMIT 1;`,
      { type: QueryTypes.SELECT }
    );

    if (!users.length) {
      throw new Error('No users found in the database.');
    }

    const user_id = users[0].id;

    await queryInterface.bulkInsert('access', [
      /* Home */
      {
        action: 'dashboard',
        description: 'Provides access to view the dashboard',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      /* Settings */
      {
        action: 'language',
        description: 'Allows the user to change the application language',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'session-timeout',
        description:
          'Enables modification of session timeout settings, ensuring optimal security',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'reset-count',
        description: 'Authorizes the user to reset the count in the dashboard',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'assign-count',
        description:
          'Grants privileges to manually set or adjust count values on the dashboard',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'assign-count-limits',
        description:
          'Permits the user to define or modify upper and lower limits for dashboard counts',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      /* Devices */
      {
        action: 'list-devices',
        description: 'Retrieves a list of all registered devices',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'add-device',
        description: 'Registers a new device to the system',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'remove-device',
        description: "Removes a specified device from the system's registry",
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'modify-device',
        description:
          'Enables the modification of details for an existing device in the system',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'assign-device',
        description: 'Enables the user to assing the device to a certain mode',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      /* Admin */
      {
        action: 'list-users',
        description: 'Retrieves a list of all registered users',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'add-user',
        description: 'Incorporates a new user into the system',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'remove-user',
        description: 'Removes a user access from the system',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        action: 'modify-user',
        description: 'Allows for the editing of an existing user',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('access', null, {});
  },
};
