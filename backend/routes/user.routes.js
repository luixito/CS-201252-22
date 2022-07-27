import { Router } from "express";
import bodyParser from "body-parser";
import { userController } from "../controllers/user.controller.js";

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

/**
 * @openapi
 * '/api/user/create':
 *  post:
 *     tags:
 *     - User
 *     summary: Crea usuario
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              name:
 *                type: string
 *                default: prueba
 *              email:
 *                type: string
 *                default: prueba@gmail.com
 *              password:
 *                type: string
 *                default: prueba141189@
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/user/update_pass':
 *  put:
 *     tags:
 *     - User
 *     summary: actualizar contraseña
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: prueba@gmail.com
 *              password:
 *                type: string
 *                default: prueba141189@
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/user/login':
 *  post:
 *     tags:
 *     - User
 *     summary: Login
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: prueba@gmail.com
 *              password:
 *                type: string
 *                default: prueba141189@
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/user/recovery_password':
 *  post:
 *     tags:
 *     - User
 *     summary: Recupera contraseña
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *            properties:
 *              email:
 *                type: string
 *                default: 201252@ids.upchiapas.edu.mx
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */


/**
 * @openapi
 * '/api/user/auten_acount':
 *  post:
 *     tags:
 *     - User
 *     summary: Confirnmar cuenta nueva
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *            properties:
 *              email:
 *                type: string
 *                default: 201252@ids.upchiapas.edu.mx
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/user/update':
 *  put:
 *     tags:
 *     - User
 *     summary: autentifica la cuenta
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *            properties:
 *              email:
 *                type: string
 *                default: 201252@ids.upchiapas.edu.mx
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.post("/create", (req, res) => userController.user_create(req, res));

router.post("/login", (req, res) => userController.user_login(req, res));

router.put("/update", (req, res) => userController.user_update(req, res));

router.post("/recovery_password", (req, res) =>
  userController.recovery_password(req, res)
);

router.post("/auten_acount", (req, res) =>
  userController.auten_acount(req, res)
);

router.put("/update", (req, res) =>
  userController.user_update_pass(req, res)
);

export default router;
