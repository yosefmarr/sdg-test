const User = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active', 'suspended', 'deleted'),
        defaultValue: 'active',
        allowNull: false,
      },
      config_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'config',
          key: 'id',
        },
      },
      dashboard_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'dashboard',
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

export const associate = ({
  User,
  Config,
  Dashboard,
  UserDevice,
  UserRole,
}) => {
  User.belongsTo(User, { foreignKey: 'created_by' });
  User.belongsTo(User, { foreignKey: 'updated_by' });
  User.belongsTo(Config, { foreignKey: 'config_id' });
  User.belongsTo(Dashboard, { foreignKey: 'dashboard_id' });
  UserDevice.hasOne(User, { foreignKey: 'id' });
  UserRole.hasOne(User, { foreignKey: 'id' });
};

export default User;
