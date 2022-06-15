import { Sequelize } from "sequelize";
import { db } from "../config/config.js";

const sequelizeClient = new Sequelize(db.database, db.user, db.password, {
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },
  host: db.host,
  dialect: "postgres",
});

sequelizeClient.sync({ force: true })
  .then(() => {
    console.log("conectado");
  })
  .catch(() => {
    console.log("No conecto!");
  });

export const getData = { sequelizeClient };
