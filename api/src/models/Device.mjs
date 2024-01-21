const Device = (sequelize, DataTypes) => {
  return sequelize.define(
    'device',
    {
      id: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(120),
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

export const associate = ({ Device, User, UserDevice }) => {
  Device.belongsTo(User, { foreignKey: 'created_by' });
  Device.belongsTo(User, { foreignKey: 'updated_by' });
  UserDevice.hasOne(Device, { foreignKey: 'id' });
};

export default Device;
