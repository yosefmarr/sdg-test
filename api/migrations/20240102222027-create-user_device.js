'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'user_device',
        {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          device_id: {
            type: Sequelize.STRING(100),
            allowNull: false,
            references: {
              model: 'device',
              key: 'id',
            },
          },
          device_type_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'device_type',
              key: 'id',
            },
          },
        },
        { transaction }
      );

      await queryInterface.addIndex(
        'user_device',
        ['user_id', 'device_id'],
        {
          unique: true,
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
    await queryInterface.dropTable('user_device');
  },
};
