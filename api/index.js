import express from 'express';

import { api } from '../config.js';
import user from '../api/components/user/network.js';

const app = express();

//ROUTERS micro servicio
app.use('/api/user', user)

//Ejecucion del servidor
app.listen(api.port, () => {
    console.log('Servidor corriendo en el puerto en el puerto =>', api.port)
}
);