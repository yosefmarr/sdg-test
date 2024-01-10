'use strict';
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hash_password = bcrypt.hashSync(
      process.env.ADMIN_DASHBOARD_PASSWORD,
      bcrypt.genSaltSync(10)
    );
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.changeColumn(
        'user',
        'created_by',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        'user',
        'updated_by',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        'user',
        'config_id',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        'user',
        'dashboard_id',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.bulkInsert(
        'user',
        [
          {
            id: 1,
            first_name: 'Admin',
            last_name: 'SDG',
            email: 'admin@sdg.com',
            password: hash_password,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction }
      );

      await queryInterface.bulkInsert(
        'config',
        [
          {
            id: 1,
            language: 'es',
            created_by: 1,
            updated_by: 1,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction, returning: ['id'] }
      );

      await queryInterface.bulkInsert(
        'dashboard',
        [
          {
            id: 1,
            name: 'Admin Dashboard',
            description: 'Dashboard exclusively for administrative use',
            created_by: 1,
            updated_by: 1,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction, returning: ['id'] }
      );

      await queryInterface.bulkUpdate(
        'user',
        {
          config_id: 1,
          dashboard_id: 1,
        },
        {
          id: 1,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        'user',
        'created_by',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id',
          },
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        'user',
        'updated_by',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id',
          },
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        'user',
        'config_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'config',
            key: 'id',
          },
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        'user',
        'dashboard_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'dashboard',
            key: 'id',
          },
        },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.bulkDelete('user', null, {}),
        queryInterface.bulkDelete('config', null, {}),
        queryInterface.bulkDelete('dashboard', null, {}),
      ]);
    });
  },
};
