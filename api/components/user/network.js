import { Router } from "express";
import { success } from "../../network/response.js";
import { getData } from "../../model/db.js";
import { getUser } from "../../model/Users.js";

const router = Router();

router.get("/check", function (req, res) {
  res.send({
    success: "exito funciona",
  });
});

router.get("/all_users_orm", async function (reg, res) {
  getUser
    .findAll({ attributes: ["username", "email", "password", "phone_number"] })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/register", async function (req, res) {
  const client = await getConnection();

  let username = req.query.username;
  let email = req.query.email;
  let password = req.query.password;
  let phone_number = req.query.phone_number;

  const query_request = {
    text: "INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)",
    values: [username, email, password, phone_number],
  };

  (await client)
    .query(query_request)
    .then((r) => {
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e.detail, 200);
    });
});
router.get("/mostrar", async function (req, res) {
  const client = await getConnection();

  const query_request = {
    text: "SELECT * FROM public.tbl_usersdb",
  };

  (await client)
    .query(query_request)
    .then((r) => {
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e.detail, 200);
    });
});

router.delete("/eliminar", async function (req, res) {
  const client = await getConnection();

  let id = req.query.id;

  const query_request = {
    text: `DELETE FROM tbl_usersdb WHERE id=${id}`,
  };

  (await client)
    .query(query_request)
    .then((r) => {
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e.detail, 200);
    });
});

router.put("/actualizar", async function (req, res) {
  const client = await getConnection();

  let id = req.query.id;
  let username = req.query.username;
  let email = req.query.email;
  let password = req.query.password;
  let phone_number = req.query.phone_number;

  const query_request = {
    text: `UPDATE tbl_usersdb SET username = '${username}', email = '${email}' , password = '${password}' , phone_number = '${phone_number}' where id = '${id}'`,
  };

  (await client)
    .query(query_request)
    .then((r) => {
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e.detail, 200);
    });
});

router.patch("/name", async function (req, res) {
  const client = await getConnection();

  let id = req.query.id;
  let username = req.query.username;

  const query_request = {
    text: `UPDATE tbl_usersdb SET username = '${username}' where id = '${id}'`,
  };

  (await client)
    .query(query_request)
    .then((r) => {
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e.detail, 200);
    });
});
router.patch("/email", async function (req, res) {
  const client = await getConnection();

  let id = req.query.id;
  let email = req.query.email;

  const query_request = {
    text: `UPDATE tbl_usersdb SET email = '${email}'  where id = '${id}'`,
  };

  (await client)
    .query(query_request)
    .then((r) => {
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e.detail, 200);
    });
});
router.patch("/pass", async function (req, res) {
  const client = await getConnection();

  let id = req.query.id;
  let password = req.query.password;

  const query_request = {
    text: `UPDATE tbl_usersdb SET password = '${password}'  where id = '${id}'`,
  };

  (await client)
    .query(query_request)
    .then((r) => {
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e.detail, 200);
    });
});
router.patch("/phone", async function (req, res) {
  const client = await getConnection();

  let id = req.query.id;
  let phone_number = req.query.phone_number;

  const query_request = {
    text: `UPDATE tbl_usersdb SET  phone_number = '${phone_number}' where id = '${id}'`,
  };

  (await client)
    .query(query_request)
    .then((r) => {
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e.detail, 200);
    });
});

export default router;
