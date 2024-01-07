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

    await queryInterface.bulkInsert('role', [
      {
        name: 'Admin',
        description: 'Administrator role with full privileges',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
      {
        name: 'User',
        description: 'Standard user with limited privileges',
        created_by: user_id,
        created_at: new Date(),
        updated_by: user_id,
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role', null, {});
  },
};
