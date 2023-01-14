import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styles from './detail.module.css'

export default function Detail() {
 const {detailId}= useParams()
 const [character, setCharacter]=useState({})   
 
 useEffect(()=> {
    fetch(`http://rickandmortyapi.com/api/character/${detailId}`)
    .then((response)=> response.json())
    .then((char) => {
        if (char.name){
        setCharacter(char);
    } else {
        window.alert('No hay personajes con ese ID');
    }
})

return setCharacter({});
}, [detailId]);

 return (
    <div className={styles.detail}>
        <div className={styles.txt}>
        <h1>{character.name}</h1>
        <h1>{character.status}</h1>
        <h1>{character.species}</h1>
        <h1>{character.gender}</h1>
        <h1>{character.origin?.name}</h1>
        </div>
<img src={character.image} alt={character.name}/>
    </div>
  )
}
