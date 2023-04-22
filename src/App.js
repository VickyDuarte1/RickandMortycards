import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Form from './components/Form.jsx';
import NavBar from './components/NavBar';
import About from './components/About.jsx';
import Detail from './components/Detail';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites';

function App () {
const [access, setAccess] = useState(false)
const username= 'myuser@soyhenry.com';
const password = 'myuser@soyhenry.com';
const navigate = useNavigate();

function login(userData){
  //hay que pasarle al forms esta funcionalidad
  if (userData.password === password && userData.username === username){
    setAccess(true);
    navigate('/home')
  }
}

function logout(){
  setAccess(false)
  Navigate('/')
}

useEffect(()=>{
  !access && navigate("/");
}, [access]); //esto no nos dejara navegar a menos que ingresemos la info correcta

  const location = useLocation()
  const [characters, setCharacters]= useState([])
function onSearch(id){ 
  fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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
       {location.pathname === '/' ? null:  <NavBar logout={logout}
          onSearch={onSearch}
        />}

      </div>

      <Routes>
        <Route path='/' element={<Form login ={login} />}></Route>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>      
        <Route path='/about' element={<About/>}></Route>
        <Route path='/favorites' element={<Favorites characters={characters} onClose={onClose}/>}></Route>
        <Route path='/detail/:detailId' element={<Detail/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
