import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar'

function App () {
  const [characters, setCharacters]= useState([])
function onSearch(id){ 
  fetch(`http://rickandmortyapi.com/api/character/${id}`)
  .then((response)=> response.json())
  .then((data)=>{
    if (data.name){
      let exist= characters.find((e)=>e.id === data.id )
      if(exist){
        alert ('ese personaje ya esta cargado');
      }else{
      setCharacters((oldChars)=>[...oldChars,data]);}
    } else{
      window.alert('No hay personajes con ese ID');
    }
  });
}

function onClose(id){
  setCharacters((char)=>{
    return char.filter( (e)=> e.id !== id)
  })
}

  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <div>
        <NavBar
          onSearch={onSearch}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
      <hr />
      
    </div>
  )
}

export default App
