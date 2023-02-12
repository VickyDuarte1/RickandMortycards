import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { filterCards, orderCards, reset } from '../../src/Redux/actions';
import Card from './Card';

export default function Favorites(props) {
const dispatch= useDispatch() 
const myFavorites = useSelector((s)=>s.myFavorites)


function handleClick(e){
    e.preventDefault();

    const {name, value} = e.target
if(name=== 'filter'){

    return dispatch(filterCards(value));

}
if (name==='order'){
    dispatch(orderCards(value));
}
}


    return (
    <>
    <div>
        <div>
            <select name='order' defaultValue= {'DEFAULT'} onChange={handleClick}>
            <option value='DEFAULT' disabled>Select order:</option>
            <option value='Ascendente'>Ascendente</option>
            <option value='Descendente'>Descendente</option>
            </select>
            <select name='filter' defaultValue= {'DEFAULT'} onChange={handleClick}>
            <option value='DEFAULT' disabled>Select filter:</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>
            <div>
<button onClick={()=> dispatch(reset())}>RESET</button>

            </div>
        </div>
    { //destructurin reutilizando el componente card para pasar lo que este en myfavorites
    myFavorites?.map((c)=>{
       return (

          <div>
       <Card
       key={c.key}
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
