import Sequelize from 'sequelize';
import config from '../config/config.mjs';

const { db } = config;

const sequelize = new Sequelize({
  ...db,
  define: {
    timestamps: true,
    underscore: true,
    freezeTableName: true,
  },
});

export const connectSequelize = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await sequelize.authenticate();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export default sequelize;
