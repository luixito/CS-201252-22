//microservicio privado
const expres = require("express");
const response = require("../../../network/response.js");
const { getConnection } = require("../../../model/db.js");

const router = expres.Router();

router.get("/register", async function (req, res) {
  const client = getConnection(); //conexion bd pgSql

  let username = req.query.username;
  let email = req.query.email;
  let password = req.query.password;
  let phone_number = req.query.phone_number;

  const query_request = {
    text: "INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)",
    values: [username, email, password, phone_number],
  };

  //promesa realizada
  await client
    .query(query_request)
    .then((r) => {
      console.log(r.rows);
    })
    .catch((e) => {
      console.log(e.stack);
    });
});

router.get("/succes1", function (req, res) {
  response.success(req, res, "", 200);
});

router.post("/login", function (req, res) {
  console.log("Usuario");
  console.log(req.query.username);
  console.log("Contraseña");
  console.log(req.query.pass);

  res.send({
    token: "token",
    id_user: "user",
    succes: "succes",
  });
});

router.post("/register", function (req, res) {
  console.log(req.query);

  res.send({
    token: "token",
    id_user: "user",
    succes: "succes",
  });
});

module.exports = router;
