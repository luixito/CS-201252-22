const expres = require("express");
const config = require("../config.js");
const user = require("./components/user/network");
const app = expres();

// router(micro servicio publico)
app.use("/api_v1/user", user);

//levanta el servidor
app.listen(config.api.port, () => {
  console.log(`api funcionando => ${config.api.port}`);
});