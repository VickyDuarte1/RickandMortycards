import style from './card.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {addFavorites, deleteFavorites} from '../../src/Redux/actions';
import { useEffect } from 'react';

export default function Card(props) {

const [itsFav, setItsFav] = useState(false);
const dispatch= useDispatch();
const myFavorites = useSelector(s =>s.myFavorites )//guarda el estado de la propiedad

function handleFavorite(ch){
   if(itsFav){
      setItsFav(false)
      dispatch(deleteFavorites(ch.id))
   } else {
      setItsFav(true)
      dispatch(addFavorites(ch))
   }
}

useEffect(() => {
   myFavorites.forEach((ch) => {
   if(ch.id === props.id){
      setItsFav(true);
   }      
   });
}, [myFavorites]);


   return (
      <div className={style.card} key={props.id} >
         <div className={style.btns}>
{itsFav ? (
   <button className={style.fav} onClick={()=>handleFavorite(props)}> ❤️ </button>
) :( <button className={style.fav} onClick={()=>handleFavorite(props)}> 🤍 </button>)}

         <button className={style.btn} onClick={()=> props.onClose()}>X</button> {//cada vez que se ejecute el onlick quiero que se ejecute el onClose}
}
</div>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         <p>{props.species}</p>
         <p>{props.gender}</p>
         <img  src={props.image} alt="imagen_carta" /> 
         </Link>
   
      </div>
   );
}
