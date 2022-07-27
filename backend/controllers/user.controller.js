import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { getUser } from "../models/user.model.js";
import { dataEnv } from "../config/env.config.js";
import { v4 as uuidv4 } from "uuid";
import sgMail from "@sendgrid/mail";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
  path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

const user_create = (req, res) => {
  getUser.User.create(
    {
      name: req.body.username,
      email: req.body.correo,
      password: req.body.pass,
      authen:  req.body.authen
    },
    { fields: ["name", "email", "password", "authen"] }
  )
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const user_login = async (req, res) => {
  const user = await getUser.User.findOne({
    where: { email: req.body.correo },
  });

  if (user) {
    const validPassword = bcryptjs.compareSync(req.body.pass, user.password);
    if (validPassword) {
      const token = jwt.sign(
        {
          sub: user.email,
          id: user.id,
        },
        "secret",
        { expiresIn: "30m" },
        data.parsed.JWT_TOKEN_SECRET,
        { algorithm: "HS256" }
      );

      user.token = token;

      res.header("auth-token", token).json({
        error: null,
        data: {
          token,
          user: user.id,
        },
      });
    } else {
      if (!validPassword)
        return res.status(400).json({ error: "contraseña no válida" });
    }
  } else {
    return res.status(400).json({ error: "Usuario no encontrado" });
  }
};

const auten_acount = (req, res) => {
  const token = uuidv4();
  console.log(dataEnv.parsed.APYKEY);
  sgMail.setApiKey(dataEnv.parsed.APYKEY);
  const msg = {
    to: req.body.email,
    from: "ClienteServidorUP@outlook.es",
    subject: "Authentificacion de Cuenta",
    text: "Ingrese al link para autentificar su nueva cuenta de usuario",
    html: `<ul><li><a href=http://localhost:3001/autenpass?email=${req.body.email}&${token}> Authentificar</a></li></ul>`,
  };
  sgMail
    .send(msg)
    .then((response) => {
      if (response[0].statusCode === 202) {
        getUser.UserRecovery.create(
          {
            email: req.body.email,
            token,
          },
          { fields: ["email", "token"] }
        ).then((data) => {
          res.send(data);
          const user = getUser.UserRecovery.findOne({
            where: { email: req.body.email },
          })
          if (user === null) {
            console.log('Not found!');
          } else {
            res.header("Data recovery", token).json({
              error: null,
              data: {
                token: token,
                email: req.body.email,
              },
            });
          }
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const recovery_password = (req, res) => {
  const token = uuidv4();
  console.log(dataEnv.parsed.APYKEY);
  sgMail.setApiKey(dataEnv.parsed.APYKEY);
  const msg = {
    to: req.body.email,
    from: "ClienteServidorUP@outlook.es",
    subject: "Recupera Contraseña",
    text: "Recupera tu Contraseña",
    html: `<ul><li><a href=http://localhost:3001/recoverypass?${token}> Recuperar</a></li></ul>`,
  };
  sgMail
    .send(msg)
    .then((response) => {
      if (response[0].statusCode === 202) {
        getUser.UserRecovery.create(
          {
            email: req.body.email,
            token,
          },
          { fields: ["email", "token"] }
        ).then((data) => {
          res.send(data);
          const user = getUser.UserRecovery.findOne({
            where: { email: req.body.email },
          })
          if (user === null) {
            console.log('Not found!');
          } else {
            res.header("Data recovery", token).json({
              error: null,
              data: {
                token: token,
                email: req.body.email,
              },
            });
          }
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const user_update_pass = (req, res) => {
  let email = req.body.email;
  let pass = req.body.password;
  let password = bcryptjs.hashSync(pass);
  console.log(password);
  let newDatas = { email, password };
  console.log(newDatas);
  getUser.User.findOne({ where: { email: email } })

    .then((r) => {
      r.update(newDatas);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const user_update = (req, res) => {
  let email = req.body.email;
  let newDatas = { authen:true };
  console.log(newDatas);
  getUser.User.findOne({ where: { email: email } })

    .then((r) => {
      r.update(newDatas);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

//user.password = user.password && user.password != "" ? bcryptjs.hashSync(user.password, 10) : "";

export const userController = {
  user_create,
  user_login,
  user_update,
  user_update_pass,
  recovery_password,
  auten_acount
  
};
