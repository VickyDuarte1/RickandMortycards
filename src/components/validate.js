
const regexUserName= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validate(inputs) {
  const errors={}
if(!inputs.username){
    errors.username = 'El nombre de usuario no puede quedar en blanco'
} else if (!regexUserName.test(inputs.username)){errors.username= 'El nombre de usuario debe ser un e-mail'}

else if (!inputs.username.length > 35 ){errors.username= 'El nombre de usuario exede los 35 caracteres'}

else if (!inputs.password){errors.password= 'La contraseña no debe quedar vacia'}

else if (!regexPassword.test(inputs.password)){errors.password= 'La contraseña debe tener al menos 8 caracteres'}

  return errors// si no tiene ningun if devuelve un obj vacio, sino un objeto con la propiedad en la que haya caido el if en forma de string
  
}
/*
La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
NO puede tener otros símbolos en teoria pero creo que si
Ejemplo:
w3Unpocodet0d0
*/
