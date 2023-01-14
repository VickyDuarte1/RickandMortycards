import style from './card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   
   console.log(props)

   return (
      <div className={style.card}>
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
