module.exports = {
  api: {
    port: process.env.API_PORT || 4000,
  },

  database: {
    host: "localhost",
    port: "5432",
    password: "232001",
    username: "postgres",
    database: "CSDB",
  },
};
