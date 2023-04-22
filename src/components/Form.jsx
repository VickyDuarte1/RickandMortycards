import React from 'react';
import styles from './Form.module.css';
import validate from './validate.js';
import gif from './portal-rick-and-morty.gif';

export default function Form(props) {
  
  const [userData, setUserData] = React.useState({username:'', password: ''});
  const [errors, setErrors] = React.useState({username:'', password: ''});
  function handleInputChange(e) {
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
      })
      setErrors(validate({
        ...userData,
        [e.target.name]: e.target.value
      }))
  }
  function handleSubmit (e){
    e.preventDefault();
    props.login(userData)
  }
  return (
    <div >
    
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62823684-0d6e-4108-8d60-aa5003885cb0/ddx53ki-24fbcff9-0c52-4360-9116-567768a5af0e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyODIzNjg0LTBkNmUtNDEwOC04ZDYwLWFhNTAwMzg4NWNiMFwvZGR4NTNraS0yNGZiY2ZmOS0wYzUyLTQzNjAtOTExNi01Njc3NjhhNWFmMGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6uNOGEztbQqWD72w_D4wFUVJMVzRTrJBHm0sZe58cDI"></img>
    
      <form onSubmit={((e)=>{
        handleSubmit(e)
      })}>

      <div className= {styles.container}>
        <label>Username </label>

        <input type= 'text' name='username' placeholder='Enter Username'
        onChange={(e)=> handleInputChange(e)}
        ></input>

        <label>Password </label>

       <input type= 'text' name='password' placeholder='Enter Password'
        onChange={(e)=> handleInputChange(e)}
        ></input>

{Object.keys(errors).length === 0 ? <button className={styles.login1}  type='submit'> Log In</button> : null}

        </div>

        </form>
        <img src={gif} alt="GIF animado" />
    </div>
  )
}
