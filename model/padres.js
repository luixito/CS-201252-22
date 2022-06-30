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

Padre.hasMany(getHijo, {
  foreignkey: "padreId",
});

getHijo.belongsTo(Padre);

export const getPadre = Padre;
