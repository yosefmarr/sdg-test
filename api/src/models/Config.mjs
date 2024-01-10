const Config = (sequelize, DataTypes) => {
  return sequelize.define(
    'config',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      language: {
        type: DataTypes.ENUM('es', 'en'),
        defaultValue: 'es',
        allowNull: false,
      },
      session_time_out: {
        type: DataTypes.INTEGER,
        defaultValue: 1440 /* 24 hours in minutes */,
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

export const associate = ({ User, Config }) => {
  Config.belongsTo(User, { foreignKey: 'created_by' });
  Config.belongsTo(User, { foreignKey: 'updated_by' });
};

export default Config;
