import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styles from './detail.module.css'

export default function Detail() {
 const {detailId}= useParams()
 const [character, setCharacter]=useState({})   
 
 useEffect(()=> {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
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
    <div className={styles.align}>
    <div className={styles.detail}>
        <div className={styles.txt}>
        <h1> Name: {character.name}</h1>
        <h1>Status: {character.status}</h1>
        <h1>Specie: {character.species}</h1>
        <h1>Gender: {character.gender}</h1>
        <h1>Origin: {character.origin?.name}</h1>
        </div>
<img src={character.image} className={styles.imagenDetail} alt={character.name}/>
    </div>
    </div>
  )
}
