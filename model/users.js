import {getData} from './db.js';
import { Sequelize } from 'sequelize/types';
//add sequalize add
const User = getData.Sequelize.define('tbl_userdb',{
    id:{type: Sequelize.SMALLINT, primaryKey: true},
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone_number: Sequelize.STRING,
},{
    tableName:'tbl_usersdb'
})

export const getUser = User;