import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import { getHijo } from "../model/hijo.js";

const Padre = getData.sequelizeClient.define("padre", {
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

Padre.hasMany(getHijo, {
  foreignkey: "hijoid",
});

getHijo.belongsTo(Padre);

export const getPadre = Padre;
