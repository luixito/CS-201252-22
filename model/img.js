import { getData } from "./db.js";
import { DataTypes } from 'sequelize';

const Imagen = getData.sequelizeClient.define(
  "img",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
);

export const getImg = Imagen;