require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//postgress://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

const sequelize = new Sequelize(`postgress://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    //url
    {loggin: false, native: false }
);

module.exports={
    ...sequelize.models,
    sequelize,
};