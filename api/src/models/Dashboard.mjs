const Dashboard = (sequelize, DataTypes) => {
  return sequelize.define(
    'dashboard',
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
      description: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      starting_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      min_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      max_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
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

export const associate = ({ Dashboard, User }) => {
  Dashboard.belongsTo(User, { foreignKey: 'created_by' });
  Dashboard.belongsTo(User, { foreignKey: 'updated_by' });
  User.hasOne(Dashboard, { foreignKey: 'id' });
};

export default Dashboard;
