const Permission = (sequelize, DataTypes) => {
  return sequelize.define(
    'permission',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
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

export const associate = ({
  Permission,
  User,
  PermissionAccess,
  RolePermission,
}) => {
  Permission.belongsTo(User, { foreignKey: 'created_by' });
  Permission.belongsTo(User, { foreignKey: 'updated_by' });
  PermissionAccess.hasOne(Permission, { foreignKey: 'id' });
  RolePermission.hasOne(Permission, { foreignKey: 'id' });
};

export default Permission;
