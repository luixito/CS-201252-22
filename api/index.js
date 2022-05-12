const expres = require("express");
const config = require('../config.js')
const app = expres();

app.listen(config.api.port, () => {
  console.log('api funcionando => ${config.api.port}');
});
