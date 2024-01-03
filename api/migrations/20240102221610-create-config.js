'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('config', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      language: {
        type: Sequelize.ENUM('es', 'en'),
        defaultValue: 'es',
        allowNull: false,
      },
      session_time_out: {
        type: Sequelize.INTEGER,
        defaultValue: 1440 /* 24 hours in minutes */,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('config');
  },
};
