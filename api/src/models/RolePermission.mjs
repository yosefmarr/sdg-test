const RolePermission = (sequelize, DataTypes) => {
  return sequelize.define(
    'role_permission',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'role',
          key: 'id',
        },
      },
      permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'permission',
          key: 'id',
        },
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
};

export const associate = ({ RolePermission, User, Role, Permission }) => {
  RolePermission.belongsTo(User, { foreignKey: 'created_by' });
  RolePermission.belongsTo(User, { foreignKey: 'updated_by' });
  RolePermission.belongsTo(Role, { foreignKey: 'role_id' });
  RolePermission.belongsTo(Permission, { foreignKey: 'permission_id' });
};

export default RolePermission;
