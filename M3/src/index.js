const app = require('./app');
const PORT = 3001;
const { Sequelize } = require('sequelize');
const { saveApiData } = require('./controllers/saveApiData');
const { sequelize } = require('../DB_connection');
//para sincronizar con la db

sequelize.sync({force:true}).then(()=>{
    console.log('DB conected');
    saveApiData();
    app.listen(PORT, ()=>{
        console.log('En server http://localhost:3001')
    })
})//retorna una promesa por eso el .then

