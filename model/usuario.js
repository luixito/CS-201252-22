import { getData } from "./db.js";
import { DataTypes } from 'sequelize';
import { getPadre } from '../model/padres.js';
import bcrypt from 'bcrypt';

const Usuario = getData.sequelizeClient.define(
  "usuario",
  {
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    tableName: "usuario",
    freezeTableName: true,
    hooks: {
      beforeCreate: (user, options) => {
        {
          user.password =
            user.password && user.password != ""
              ? bcrypt.hashSync(user.password, 10)
              : "";
        }
      },
    },
  }
);

Usuario.hasMany(getPadre, {
    foreignkey:"usuarioId"
});

getPadre.belongsTo(Usuario);

export const getUsuario = Usuario;