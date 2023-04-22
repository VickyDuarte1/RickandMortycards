import { useState } from "react";
import styles from './NavBar.module.css';

export default function SearchBar(props) {
   const [character, setCharacter] = useState('')
   
   function handleInput(event){
      setCharacter(event.target.value)
   }

   function handleSearch() {
      props.onSearch(character);
      setCharacter('');
   }

   return (
      <div>
         <input type='text' name='search' placeholder='type id'
         onChange={(e) => handleInput(e)} value={character} />
         <button className={styles.addbtn} onClick={() => handleSearch()}>Agregar</button> 
      </div>
   ); 
}




