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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
