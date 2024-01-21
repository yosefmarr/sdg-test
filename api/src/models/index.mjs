import { readdirSync } from 'fs';
import { basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../db.mjs';

const toPascalCase = (str) => {
  return str.replace(/(?:^\w|[_-]\w)/g, (match) =>
    match.charAt(match.length - 1).toUpperCase()
  );
};

const baseFileName = basename(import.meta.url);
const db = {};
const associations = [];

export const initDBModels = async () => {
  const files = readdirSync(new URL('.', import.meta.url).pathname).filter(
    (file) => {
      return (
        file.indexOf('.') !== 0 &&
        file !== baseFileName &&
        file.slice(-4) === '.mjs'
      );
    }
  );

  for (const file of files) {
    const module = await import(
      join(new URL('.', import.meta.url).pathname, file)
    );
    const model = module.default(sequelize, DataTypes);
    const associate = module.associate;
    db[toPascalCase(model.name)] = model;
    if (associate) {
      associations.push(associate);
    }
  }

  associations.forEach((associate) => {
    associate(db);
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
};

export default db;
