import path from "path";
import dotenv from "dotenv";
import { dataEnv } from "../config/env.config.js";
import { fileURLToPath } from "url";
import { getProduc } from "../models/products.model.js";
import {
  PutObjectCommand,
  S3Client,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
  path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

const s3 = new S3Client({
  credentials: {
    accessKeyId: dataEnv.parsed.ACCESS_KEY,
    secretAccessKey: dataEnv.parsed.SECRET_ACCESS_KEY,
  },
  region: dataEnv.parsed.BUCKET_REGION,
});

const produc_view = async function (req, res) {
  getProduc.products
    .findAll()
    .then((r) => {
      res.send(r);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const bucketName = dataEnv.parsed.BUCKET_NAME;

const getImage = async (req, res) => {
  const posts = await prisma.posts.findMany({ orderBy: [{ created: "desc" }] });

  for (const post of posts) {
    const getObjectParamns = {
      Bucket: bucketName,
      Key: post.imageName,
    };
    const command = new GetObjectCommand(getObjectParamns);
    const url = await getSignedUrl(s3, command, { expiresIn: 360 });
    post.ImageUrl = url;

    res.send(posts);
  }
};

const produc_create = async function (req, res, upload) {
  upload.single("name");

  const params = {
    Bucket: bucketName,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  const command = new PutObjectCommand(params);

  await s3.send(command);
  console.log(params.ContentType);

  var urlsss = `  https://201252.s3.us-west-1.amazonaws.com/${params.Key}`;
  console.log(urlsss);

  getProduc.products
    .create(
      {
        name: urlsss,
        nameProduc: req.body.nameProduc,
        description: req.body.description,
        price: req.body.price,
        amount: req.body.amount,
      },
      {
        fields: ["name", "nameProduc", "description", "price", "amount"],
      }
    )
    .then((img) => {
      res.send(img);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Product_update = (req, res) => {
  let nameProduc = req.body.nameProduc;
  let amount = req.body.amount;
  let id = req.body.id;
  let description = req.body.description;
  let price = req.body.price;
  let newDatas = { nameProduc, amount, description, price };
  r.update(newDatas);

  getProduc.products
    .findOne({ where: { id: id } })

    .then((res) => {
      res.status(200).json({ message: "Deleted successfully" });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const Product_delete = function (req, res) {
  getProduc.products
    .destroy({ where: { id: req.body.id } })
    .then((res) => {
      console.log("id", id);
      res.status(200).json({ message: "Deleted successfully" });
    })
    .catch((err) => {
      console.log("error");
      res.status(400).send(err);
    });
};

export const producController = {
  produc_create,
  Product_update,
  produc_view,
  Product_delete,
  getImage,
};
