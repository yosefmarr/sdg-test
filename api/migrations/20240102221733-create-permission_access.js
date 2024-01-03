'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'permission_access',
        {
          permission_id: {
            type: Sequelize.INTEGER,
            onUpdate: 'CASCADE',
            allowNull: false,
            references: {
              model: 'permission',
              key: 'id',
            },
          },
          access_id: {
            type: Sequelize.INTEGER,
            onUpdate: 'CASCADE',
            allowNull: false,
            references: {
              model: 'access',
              key: 'id',
            },
          },
        },
        { transaction }
      );

      await queryInterface.addIndex(
        'permission_access',
        ['permission_id', 'access_id'],
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
    await queryInterface.dropTable('permission_access');
  },
};
