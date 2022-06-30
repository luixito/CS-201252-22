import { getData } from "./db.js";
import { DataTypes } from "sequelize";


const Hijo = getData.sequelizeClient.define("hijo", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  paterno: {
    type: DataTypes.STRING,
  },
  materno: {
    type: DataTypes.STRING,
  },
  edad: {
    type: DataTypes.STRING,
  },
});

export const getHijo = Hijo;
