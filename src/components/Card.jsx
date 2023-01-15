import style from './card.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {addFavorites, deleteFavorites} from '../Redux/actions';
import { useEffect } from 'react';

export default function Card(props) {

const [itsFav, setItsFav] = useState(false);
const dispatch= useDispatch();
const myFavorites = useSelector((s)=>s.myFavorites)//guarda el estado de la propiedad

function handleFavorite(id){
   if(itsFav){
      setItsFav(false)
      dispatch(deleteFavorites(id))
   } else {
      setItsFav(true)
      dispatch(addFavorites(id))
   }
}

useEffect(() => {
   myFavorites.forEach((id) => {
   if(id === props.id){
      setItsFav(true);
   }      
   });
}, [myFavorites]);


   return (
      <div className={style.card}>
{itsFav ? (
   <button onClick={()=>handleFavorite(props.id)}> ❤️ </button>
) :( <button onClick={()=>handleFavorite(props.id)}> 🤍 </button>)}


         <button className='btn' onClick={()=> props.onClose()}>X</button> {//cada vez que se ejecute el onlick quiero que se ejecute el onClose}
}
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         <p>{props.species}</p>
         <p>{props.gender}</p>
         <img  src={props.image} alt="imagen_carta" /> 
         </Link>
   
      </div>
   );
}
