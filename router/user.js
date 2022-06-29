import { Router } from "express";
import { getUser } from "../model/users.js";
import { getPadre } from "../model/padres.js";
import { getHijo } from "../model/hijo.js";
import { getUsuario } from "../model/usuario.js";
import {getImg} from "../model/img.js"

const router = Router();

router.get("/check", function (req, res) {
  res.send({
    success: "exito funciona",
  });
});

router.get("/all_users_orm", async function (reg, res) {
  getUser
    .findAll({
      attributes: ["name", "lastName", "email", "password", "phone_number"],
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/insert", async function (req, res) {
  getUser
    .create(
      {
        name: req.query.nombre,
        lastName: req.query.lastName,
        email: req.query.email,
        password: req.query.password,
        phone_number: req.query.phone_number,
      },
      { fields: ["name", "lastName", "email", "password", "phone_number"] }
    )
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get e insert hijo

router.get("/gethijo", async function (reg, res) {
  getHijo
    .findAll({
      attributes: ["nombre", "paterno", "materno", "edad", "idpadre"],
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/inserthijo", async function (req, res) {
  getHijo
    .create(
      {
        nombre: req.query.nombre,
        paterno: req.query.paterno,
        materno: req.query.materno,
        edad: req.query.edad,
      },
      { fields: ["nombre", "paterno", "materno", "edad"] }
    )
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get insert padre

router.get("/getpadre", async function (reg, res) {
  getPadre
    .findAll({
      attributes: ["nombre", "paterno", "materno", "edad", "usuarioId"],
    })
    .then((users) => {
      res.send(users);
      console.log(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/insertpadre", async function (req, res) {
  getPadre
    .create(
      {
        nombre: req.query.nombre,
        paterno: req.query.paterno,
        materno: req.query.materno,
        edad: req.query.edad,
      },
      { fields: ["nombre", "paterno", "materno", "edad"] }
    )
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get insert usuario
router.post("/insertusuario", async function (req, res) {
  getPadre
    .create(
      {
        password: req.query.password,
        nombre: req.query.nombre,
      },
      { fields: ["password", "nombre"] }
    )
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
export default router;
