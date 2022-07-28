import { api } from "./config/config.js";
import swaggerDocs from "./config/swagger.config.js";
import middleware from "./middlewares/token.middleware.js";
import produc from "./routes/product.routes.js";
import express from "express";

import user from "./routes/user.routes.js";

const app = express();

app.use(express.json());
// ROUTERS
app.use("/api/user", user);
app.use("/api/product", produc);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

// app.use('/api/profile', middleware, profile);

// SERVIDOR ACTIVO
app.listen(api.port, () => {
  console.log(`Servidor corriento en el puerto => ${api.port}`);
  swaggerDocs(app, api.port);
});
