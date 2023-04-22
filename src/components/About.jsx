import React from 'react'
import styles from './About.module.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function About() {

  const email = 'victoria.durte@gmail.com';
  const mailtoLink = `mailto:${email}`;


  return (

    <div className={styles.box}>
    <div className={styles.abt}>
    Hola y gracias por ingresar! Esta es la pagina de cartas de Rick y Morty realizada para el bootcamp de Henry con la api de Rick and Morty, para integrar algunos conocimientos adquiridos a lo largo de la cursada.
    <br></br>
    Mi nombre es Victoria Duarte y estoy feliz de guiarlos en esta pequeña travesia en mi app.
    <br></br>
    Se utilizaron herramientas como React, Redux, Node js. y SQL.
    <br></br>
    Podés encontrar los 826 personajes, agregarlos a favoritos, y ver su detalle clickeando en su tarjeta.
    <br></br>
    Tambien en favoritos tenes disponible una search bar para ordenarlos por nombre y filtrarlos por género.
    <br></br>
    Por último podes eliminar los personajes que desees desde el home o de tu seccion de favoritos.

    <br></br>
    <br></br>
    Consultas? Sugerencias?
    Clickea el sobre y escribime al correo!
    <br></br>
    <a href={mailtoLink}>
      <FaEnvelope size={32} width={64} height={64} color='green' />
    </a>
<br></br>
   O mandame un mensaje atravez de mis redes
   <br></br>
   <a href="https://www.linkedin.com/in/victoria-duarte-7431a4205/">
        <FaLinkedin size={32} width={64} height={64} color='green' />
      </a> 
     
      <a href="https://github.com/VickyDuarte1">
        <FaGithub size={32} width={64} height={64} color='green'/>
      </a>
      <br></br>
    
    </div>
    </div>

  )
}
