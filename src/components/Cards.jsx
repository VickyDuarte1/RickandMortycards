import Card from './Card';
import styles from './Cards.module.css';


export default function Cards(props) {
   const { characters } = props;
   return (<div className={styles.Cards}>
      { //destructurin
      characters.map((c)=>{
         return (
            <div className= {styles.card}>
         <Card
         name={c.name}
         species={c.species}
         gender={c.gender}
         image={c.image}
         onClose= {()=>props.onClose(c.id)}
      />
      </div>
      )
      //por cada character una card
      })
   }
   </div>)};
