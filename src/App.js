import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Login from './components/Login.jsx';
import NavBar from './components/NavBar';
import About from './components/About.jsx';
import Detail from './components/Detail';
import { Routes, Route } from 'react-router-dom';


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

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>      
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail/:detailId' element={<Detail/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
