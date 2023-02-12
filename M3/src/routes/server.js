// const http = require('http');
// const PORT = 3001;//BUENA PRACTICA
// //const characters = require('../utils/data');//requiero los personajes de data
// const { getCharById, getCharDetail } = require('../controllers/index');

// http.createServer(function(req,res){ 
// const allUrl = req.url.split('/')
// const id = allUrl.pop()//con express es mas facil pero asi me trae el id string que es el ultimo en la url luego del /
// const url = allUrl.join('/')

// if(url === '/onsearch'){
//     return getCharById(res, id);
// }else if(url === '/detail'){
//     return getCharDetail(res, id);
// }else{ 
// res.writeHead(404, {'Content-type':'text/plain'});
// res.end('Route not found (D:)');
// }})
// .listen(PORT, ()=> {
//     console.log(` Escuchando a http://localhost:${PORT}`);
// })
// //solucionar cores: extencion allow cores

// // switch(url){
// //     case '/onsearch':
// //         return getCharById(res, id);
// //     default:  
// //     res.writeHead(404, {'Content-type':'text/plain'});
// //     res.end('Route not found (D:)');



// // if(url === '/rickandmorty/character'){
// //         const character = characters.find((ch)=>{
// //         return ch.id === Number(id)
// // })
// //     if(character){
// //         res.writeHead(200, {'Content-type':'aplication/json'})
// //         res.end(JSON.stringify(character));
// //     }else{
// //         res.writeHead(404, {'Content-type':'text/plain'})
// //         res.end('Route not found D:');
// //     }
// // }

// // else if(req.url === '/rickandmorty/characters'){//en caso de que la url incluya el string
// //     res.writeHead(200, {'Content-type':'aplication/json'})//como no puedo pasar objeto paso a json
// //     res.end(JSON.stringify(characters));
// // }else{
// //     res.writeHead(404, {'Content-type':'text/plain'})//como no puedo pasar objeto paso a json
// //     res.end('Route not found :C')
// // }
// //http://localhost:3001/rickandmorty/characters

const express = require('express');
const app = express();//guardo la ejecucion de express que maneja las solicitudes y respuestas cliente/servidor
const axios = require('axios');
app.use(express.json());

app.get('/rickandmorty/character/:id', async (req, res)=>{//delante de la arrow el asyn
   const { id } = req.params;
   //aplicar axios-traer info de api
try {
    const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
 //necesito el .data porque es axios
 const data = response.data; 
 //en .data tengo la info de la api
 const infoCharacter = {
   
    id: data.id,
    name: data.name,
    species: data.species,
    gender: data.gender,
    image: data.image
 }
//no mapeo el .data porque solo quiero esos parametros especificos
 res.status(200).json(infoCharacter);

} catch (error) {
   res.status(404).send(error.message)
}
})

app.get('/rickandmorty/detail/:detailid', async (req,res)=>{
    const {detailID} = req.params; 
try {
    const response = (await axios(`https://rickandmortyapi.com/api/character/${detailID}`)).data;
    
    const infoCharacterDetail = {
       
        name:response.name,
        status: response.status,
        species: response.species,
        gender: response.gender,
        origin: response.origin.name,
        image: response.image
    }
    res.status(200).json(infoCharacterDetail);

} catch (error) {
    res.status(404).send(error.message);
}
})

const fav = [];

app.get('rickandmorty/fav', (req,res)=>{
    //aca no manejo asincronia ya que traigo directamente del arreglo todos los personajes
    res.status(200).json(fav);
})

app.post('/rickandmorty/fav', (req,res)=>{
    //que guarde los personajes en fav que llegan por body
fav.push(req.body);
res.status(200).send('se guardaron los fav');
})

app.delete('/rickandmorty/fav/:id', (req,res)=>{
    const { id } = req.params;
//eliminar de fav en base a id, filter no sirve porque hace una copia, debo pisar la db
const favFiltered = fav.filter(char => char.id !== Number(id));//como llega por params el id llega como string
fav=favFiltered;

res.status(200).send('se elimino el personaje')
})

module.exports = app;