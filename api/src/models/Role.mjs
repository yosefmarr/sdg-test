const Role = (sequelize, DataTypes) => {
  return sequelize.define(
    'role',
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

export const associate = ({ Role, User, UserRole, RolePermission }) => {
  Role.belongsTo(User, { foreignKey: 'created_by' });
  Role.belongsTo(User, { foreignKey: 'updated_by' });
  UserRole.hasOne(Role, { foreignKey: 'id' });
  RolePermission.hasOne(Role, { foreignKey: 'id' });
};

export default Role;
