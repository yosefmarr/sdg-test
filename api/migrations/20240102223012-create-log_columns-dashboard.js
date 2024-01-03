'use strict';
//https://sequelize.org/docs/v6/other-topics/migrations/
/** @type {import('sequelize-cli').Migration} */
const tableName = 'dashboard';
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          tableName,
          'created_by',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          tableName,
          'created_at',
          {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          tableName,
          'updated_by',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          tableName,
          'updated_at',
          {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
          },
          { transaction: t }
        ),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn(tableName, 'created_by', {
          transaction: t,
        }),
        queryInterface.removeColumn(tableName, 'created_at', {
          transaction: t,
        }),
        queryInterface.removeColumn(tableName, 'updated_by', {
          transaction: t,
        }),
        queryInterface.removeColumn(tableName, 'updated_at', {
          transaction: t,
        }),
      ]);
    });
  },
};
