//microservicio privado
const expres = require("express");
const response = require("../../../network/response.js");

const router = expres.Router();

router.get("/succes1", function (req, res) {
  response.success(req, res,"" ,200 );
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
