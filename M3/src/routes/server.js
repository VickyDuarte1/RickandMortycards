const http = require('http')
const PORT = 3001;//BUENA PRACTICA
const characters = require('../utils/data')//requiero los personajes de data

http.createServer(function(req,res){ 

const allUrl = req.url.split('/')
const id = allUrl.pop()//con express es mas facil pero asi me trae el id string que es el ultimo en la url luego del /
const url = allUrl.join('/')

if(url === '/rickandmorty/character'){
        const character = characters.find((ch)=>{
        return ch.id === Number(id)
})
    if(character){
        res.writeHead(200, {'Content-type':'aplication/json'})
        res.end(JSON.stringify(character));
    }else{
        res.writeHead(404, {'Content-type':'text/plain'})
        res.end('Route not found D:');
    }
}

else if(req.url === '/rickandmorty/characters'){//en caso de que la url incluya el string
    res.writeHead(200, {'Content-type':'aplication/json'})//como no puedo pasar objeto paso a json
    res.end(JSON.stringify(characters));
}else{
    res.writeHead(404, {'Content-type':'text/plain'})//como no puedo pasar objeto paso a json
    res.end('Route not found :C')
}

}).listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
})

//http://localhost:3001/rickandmorty/characters