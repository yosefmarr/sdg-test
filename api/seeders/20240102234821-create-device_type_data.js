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

    await queryInterface.bulkInsert('device_type', [
      {
        name: 'In',
        description: 'Inward processing device type',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        name: 'Out',
        description: 'Outward processing device type',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('device_type', null, {});
  },
};
