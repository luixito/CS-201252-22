//microservicio privado
const expres = require("express");

const router = expres.Router();

router.get("/", function (req, res) {
  res.send({
    success: "si funcia",
  });
});

router.post("/login", function (req, res) {
  console.log(req.query);

  res.send({
    username: "",
    pass: "",
  });
});

router.post("/register", function (req, res) {
  console.log(req.query);

  res.send({
    success: "1",
    email: "2",
    pass: "3",
    phone: "4",
  });
});

module.exports = router;
