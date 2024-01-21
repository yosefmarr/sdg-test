const UserDevice = (sequelize, DataTypes) => {
  return sequelize.define(
    'user_device',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      device_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        references: {
          model: 'device',
          key: 'id',
        },
      },
      device_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'device_type',
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

export const associate = ({ UserDevice, User, Device, DeviceType }) => {
  UserDevice.belongsTo(User, { foreignKey: 'created_by' });
  UserDevice.belongsTo(User, { foreignKey: 'updated_by' });
  UserDevice.belongsTo(User, { foreignKey: 'user_id' });
  UserDevice.belongsTo(Device, { foreignKey: 'device_id' });
  UserDevice.belongsTo(DeviceType, { foreignKey: 'device_type_id' });
};

export default UserDevice;
