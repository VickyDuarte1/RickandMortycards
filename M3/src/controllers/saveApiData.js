const axios = require('axios');
const { Character } = require ('../../DB_connection');
const { Sequelize } = require('sequelize');

const getApiData = async () => {
    //request a la api para obtener los primeros 100 personajes
try {
    //const apiData = await axios(`https://rickandmortyapi.com/api/character`)
//lame con axios, ahora para traerlos:
let i = 1;
let characters = [];
while(i < 10 ){//probamos si sirve sino en vez de id tengo que hacer el wile a 6 y poner page en vez de id
    let apiData = await axios(`https://rickandmortyapi.com/api/character?id=${i}`);//como devuelve una promesa y 
    characters.push(apiData);//guardo promesas en el array tengo que esperar que se resuelvan todas y luego de resueltas el 
    i++;//promise all devuelve un array con los character y lo mapeo para retornarlo
}
characters = (await Promise.all(characters)).map(res => res.data.results.map(char => {//axios da un obj gigante y dentro de data tengo la respuesta de la api
    return({       //de la respuesta de esa promesa agarro data y de ahi a results que es el array de objetos que me retorna la info que necesito de los personajes
        id:char.id,
        name: char.name,
        status: char.status,
        species: char.species,
        gender: char.gender,
        origin: char.origin.name,
        image:char.image
    })
}))

let allCharacters = [];
characters.map(char => { allCharacters = allCharacters.concat(char)})

return allCharacters;//me creo un nuevo array, lo mapeo y ahora el array vacio se concatena con cada personaje

} catch (error) {
    return { error: error.message }//no hay response porque es un controlador no una ruta
}//ahora tengo que guardar en la base de datos los personajes
}

const saveApiData = async ()=> {
    try {
        const allCharacters = await getApiData();
        await Character.bulkCreate(allCharacters);//bulckCreate nos permite pasar un array de objetos y los crea todos juntos en la db 
        //es decir crea el campo y lo llena con la info
    } catch (error) {
       return { error: error.message }
    }
}

module.exports =  {saveApiData, getApiData};