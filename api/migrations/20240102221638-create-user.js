'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(1024),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('active', 'suspended', 'deleted'),
        defaultValue: 'active',
        allowNull: false,
      },
      config_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'config',
          key: 'id',
        },
      },
      dashboard_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'dashboard',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  },
};
