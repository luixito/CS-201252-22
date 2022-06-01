//microservicio privado
const expres = require("express");
const response = require("../../../network/response.js");
const { getConnection } = require("../../../model/db.js");

const router = expres.Router();

router.post("/register", async function (req, res) {
  const client = await getConnection(); //conexion bd pgSql

  const username = req.query.username;
  const email = req.query.email;
  const password = req.query.password;
  const phone_number = req.query.phone_number;

  const query_request = {
    text: "INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)",
    values: [username, email, password, phone_number],
  };

  //promesa realizada
  (client).query(query_request)
    .then((r) => {
      response.success(req,res,r,200);
      console.log("todo bien");
    })
    .catch((e) => {
      response.success(req,res,e.detail,200,e.response);
      console.log("todo mal");
    });
});

router.delete("/delete", async function (req, res) {
  const client = await getConnection(); //conexion bd pgSql

  let username = req.query.username;

  const query_request = {
    text: `DELETE FROM tbl_usersdb WHERE username = '${username}'`
  };

  //promesa realizada
  (client).query(query_request)
    .then((r) => {
      response.success(req,res,r,200);
    })
    .catch((e) => {
      response.success(req,res,e.detail,200);
    });
});

router.put("/update_user", async function (req, res, props) {
  const client = await getConnection(); //conexion bd pgSql

  let username = props.username;
  let email = props.email;
  let password = props.password;
  let phone_number = props.phonenumber;

  const query_request = {
    text: "UPDATE tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)",
    values: [username, email, password, phone_number],
  };

  //promesa realizada
  (client).query(query_request)
    .then((r) => {
      response.success(req,res,r,200);
    })
    .catch((e) => {
      response.success(req,res,e.detail,200);
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
    token: "req.query.username",
    id_user: "user",
    succes: "succes",
  })
});

router.post("/registerus", function (req, res) {
  console.log(req.query);

  res.send({
    token: "token",
    id_user: "user",
    succes: "succes",
  });
});

module.exports = router;
