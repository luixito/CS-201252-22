import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { getProduc } from "../models/products.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
  path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

const produc_view = async function (req, res) {
  getProduc.products.findAll()
    .then((r) => {
      res.send(r);
      console.log(r);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const produc_create =  function (req, res, upload) {
  upload.single("name");
   getProduc.products
    .create(
      {
        name: req.file.originalname,
        description: req.body.description,
        price: req.body.price,
        amount: req.body.amount,
      },
      {
        fields: ["name", "description", "price", "amount"],
      }
    )
    .then((img) => {
      res.send(img);
    })
    .catch((err) => {
      console.log(err);
    });
};
const Product_update = async(req, res) => {
  let id = req.body.id;
  let name = req.body.nombre; //req.file.nombre
  let description = req.body.des;
  let price = req.body.pres;
  let amount = req.body.cant;
  const upt = await getProduc.products
    .create({ where: {id: id} })

    upt.set({
      name : name,
      description : description,
      price : price,
      amount : amount,
    });

    await upt.save().then((r) => {
      res.status(200).json({ message: "Update successfully" });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const Product_delete = async function (req, res) {
  let id = req.body.id;
  getProduc.products
    .destroy({ where: { id: id } })
    .then((r) => {
      res.status(200).json({ message: "Deleted successfully" });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const producController = {
  produc_create,
  Product_update,
  produc_view,
  Product_delete,
};
