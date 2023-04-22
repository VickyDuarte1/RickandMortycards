require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const characterModel= require ('./src/models/Character');
//ahora ejecuto el modelo pasandole como argumento la instancia de sequelize ya creada

const sequelize = new Sequelize(`postgres://postgres:posgresql@localhost:5432/rickandmorty`,
    //url
    {loggin: false, native: false }
);

characterModel(sequelize);


module.exports={
    ...sequelize.models,
    sequelize,
};