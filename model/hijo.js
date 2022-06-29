import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import { getPadre } from '../model/padres.js';


const Hijo = getData.sequelizeClient.define("hijo", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paterno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  materno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const getHijo = Hijo;
