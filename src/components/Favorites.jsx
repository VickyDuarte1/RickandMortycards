import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

export default function Favorites(props) {
 const myFavorites = useSelector((s)=>s.myFavorites)
 const characters = props.characters.filter((e)=> {
return myFavorites.includes(e.id)
 })
    return (
    <>
    <div>
    { //destructurin reutilizando el componente card para pasar lo que este en myfavorites
    characters.map((c)=>{
       return (
          <div>
       <Card
       id={c.id}
       name={c.name}
       species={c.species}
       gender={c.gender}
       image={c.image}
       onClose= {()=>props.onClose(c.id)}
    />
    </div>
    )
 
    })
 }
 </div>
 
 </>
  )
}
