import pkg from "pg";
import { Sequelize } from "sequelize";
const { Pool } = pkg;
import { db } from "../config.js";

const sequelizeClient = new Sequelize(db.database, db.username, db.password, {
  dialectOptions:{
    ssl:{
      require:true,
      rejectUnauthorized:false,
    }
  },
  host: db.host,
  dialect: "postgres",
});

sequelizeClient
  .authenticate()
  .then(() => {
    console.log("conectado");
  })
  .catch((err) => {
    console.log("No conecto!");
    console.log(err)
  });

export const getData = {sequelizeClient };
