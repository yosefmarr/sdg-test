'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dashboard', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      starting_count: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      min_count: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      max_count: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dashboard');
  },
};
