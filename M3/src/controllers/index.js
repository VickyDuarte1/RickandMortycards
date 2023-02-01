const axios = require('axios');
var fav = []//base de datos

const getCharacterId = function (req, res){
    const { id } = req.params
//buscar y guardar character//cuando no se pone nada por defecto es un get en axios
axios(`http://rickandmortyapi.com/api/character/${id}`)
    .then((data)=>data.data)//retorna la data en si, no el objeto con la propiedad data
    .then((data) => {
        const character = { 
            image:data.image,
            name:data.name,
            gender:data.gender,
            species:data.species,
            id: data.id,
        };
        res.writeHead( 200, {'Content-type':'aplication/json'});//responder 200 con app/json
        res.end(JSON.stringify(character));
    })
    .catch((error)=>{
        res.writeHead(500, {'Content-type':'text/plain'});
        res.end('char not found D: D:');
    });
};

const getDetailId = function (req, res){
    const { detailId } = req.params
    //buscar y guardar character//cuando no se pone nada por defecto es un get en axios
    axios(`http://rickandmortyapi.com/api/character/${id}`)
        .then((data)=>data.data)//retorna la data en si, no el objeto con la propiedad data
        .then((data) => {
            const character = { 
                image:data.image,
                name:data.name,
                gender:data.gender,
                species:data.species,
                id: data.id,
                status: data.status,
                origin: data.origin,
            };
            res.writeHead( 200, {'Content-type':'aplication/json'});//responder 200 con app/json
            res.end(JSON.stringify(character));
        })
        .catch((error)=>{
            res.writeHead(500, {'Content-type':'text/plain'});
            res.end('char not found D: D:');
        });
    };

    const getFav= function (req, res){
        res.status(200).end(JSON.stringify(fav))
    };
    const postFav= function (req, res){
        fav.push(req.body)//pushea toda la data que trae de body 
        console.log('post fav ->', fav);
        res.status(200).end(JSON.stringify(req.body))
    };
    const deleteFavId= function (req, res){
        const { id } = req.params
        const character = fav.find(c=>c.id === Number(id))
        if(character){
            res.status(200).end(JSON.stringify(character))
        }else{
req.status(400).end('character no se encuentra')
        }
    };

module.exports = {  
        getCharacterId, 
        getDetailId, 
        getFav, 
        postFav, 
        deleteFavId
          }