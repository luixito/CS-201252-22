import { Router } from "express";
import { success } from "../../../network/response.js";
import { getData } from "../../../model/db.js";
import { getUser } from "../../../model/Users.js";

const router = Router();

router.get("/all_users_orm", async function (req, res) {
  getUser
    .findAll({ attributes: ["username", "email", "password", "phone_number"] })
    .then((users) => {
      res.send(users);
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/register", async function (req, res) {
  getUser
    .create({
      username: req.query.username,
      email: req.query.email,
      password: req.query.password,
      phone_number: req.query.phone_number,
    })
    .then((users) => {
      res.send(success);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
