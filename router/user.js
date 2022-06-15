import { Router } from "express";
import { success } from "./response.js";
import { getUser } from '../model/users.js'
import { getProfile } from '../model/profile.js'

const router = Router();

router.get("/check", function (req, res) {
  res.send({
    success: "exito funciona",
  });
});

router.get("/all_users_orm", async function (reg, res) {
  getUser
    .findAll({
      attributes: ["name", "lastname", "email", "password", "phone_number"],
    })
    .then((users) => {
      res.send(users);
      res.send(success);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/insert", async function (req, res) {
  getUser
    .create(
      {
        name: req.query.name,
        lastname: req.query.lastname,
        email: req.query.email,
        password: req.query.password,
        phone_number: req.query.phone_number,
      },
      { fields: ["name", "lastname", "email", "password", "phone_number"] }
    )
    .then((users) => {
      res.send(users);
      res.send(success);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
