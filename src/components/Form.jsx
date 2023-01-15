import React from 'react';
import styles from './Form.module.css';
import validate from './validate.js';

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
    <div>
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

{Object.keys(errors).length === 0 ? <button  type='submit'> Log In</button> : null}

        {/*<button  type='submit'> Log In</button>*/}
        </div>

        </form>
    </div>
  )
}
