const PermissionAccess = (sequelize, DataTypes) => {
  return sequelize.define(
    'permission_access',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      permission_id: {
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        allowNull: false,
        references: {
          model: 'permission',
          key: 'id',
        },
      },
      access_id: {
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        allowNull: false,
        references: {
          model: 'access',
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

export const associate = ({ PermissionAccess, User, Permission, Access }) => {
  PermissionAccess.belongsTo(User, { foreignKey: 'created_by' });
  PermissionAccess.belongsTo(User, { foreignKey: 'updated_by' });
  PermissionAccess.belongsTo(Permission, { foreignKey: 'permission_id' });
  PermissionAccess.belongsTo(Access, { foreignKey: 'access_id' });
};

export default PermissionAccess;
