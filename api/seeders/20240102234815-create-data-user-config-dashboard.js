'use strict';
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM \`user\`;`,
      { type: QueryTypes.SELECT }
    );

    if (users.length > 0) {
      throw new Error('User is already registered in the db');
    }

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

      const user_id = await queryInterface.bulkInsert(
        'user',
        [
          {
            first_name: 'Admin',
            last_name: 'SDG',
            email: 'admin@sdg.com',
            password: hash_password,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction, returning: ['id'] }
      );

      const config_id = await queryInterface.bulkInsert(
        'config',
        [
          {
            language: 'es',
            created_by: user_id,
            updated_by: user_id,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction, returning: ['id'] }
      );

      const dashboard_id = await queryInterface.bulkInsert(
        'dashboard',
        [
          {
            name: 'Admin Dashboard',
            description: 'Dashboard exclusively for administrative use',
            created_by: user_id,
            updated_by: user_id,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction, returning: ['id'] }
      );

      await queryInterface.bulkUpdate(
        'user',
        {
          config_id,
          dashboard_id,
        },
        {
          id: user_id,
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
