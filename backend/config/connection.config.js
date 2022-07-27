import Sequelize from 'sequelize';
import { db } from './config.js';

const sequelizeClient = (() => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return new Sequelize(db.database, db.user, db.password, {
                host: db.host,
                port: db.portdb,
                dialect: 'postgres',
            });

        case 'test':
            return new Sequelize(db.database, db.user, db.password, {
                dialectOptions: {
                },
                host: db.host,
                dialect: 'postgres',
            });

        default:
            return new Sequelize(db.database, db.user, db.password, {
                dialectOptions: {
                    ssl: {
                        require: true,
                    }
                },
                host: db.host,
                dialect: 'postgres',
            });
    }
})();



sequelizeClient.sync({ alert: true })
//forse
    .then(() => {
        console.log('Conectado')
    })
    .catch((err) => {
        console.log('No se conecto', err)
    });

export const getData = { sequelizeClient };
