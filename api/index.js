const expres = require("express");
const config = require('../config.js');
const user = require('./components/user/network.js')
const app = expres();

// router(micro servicio publico)
app.use('/api/user', user);


//levanta el servidor
app.listen(config.api.port, () => {
  console.log(`api funcionando => ${config.api.port}`);
});
