const { Pool } = require("pg");
const config = require("../config.js");

//conexion de la base de datos
async function getConnection() {
  const client = new Pool({
    user: config.database.username,
    host: config.database.host,
    database: config.database.database,
    password: config.database.password,
    port: config.database.port,
  });

  await client.connect();
  return client;
}
