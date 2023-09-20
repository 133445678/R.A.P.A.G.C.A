import React, { useState } from "react";
import "./login.css";
import Title from "./components/Title/title";
import Label from "./components/Label/Label";
import input from "./components/input/input";

const Login = () => {
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    //Variable para almacenar usuario
    function handleChange (name, value) {
     if(name == 'usuario'){
      setUser(value)
     }else{
        setPassword(value)
     }
    };
    function handleSubmit(){
        let account = { user, password }
        if(account){
            console.log('account:', account)
        }
    };
    return (
        <div className="login-container">
           <Title text= "Hola bienvenidos a " />
           <Label text= "ingrese su usario" />
           <Input
           attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Ingrese su usuario'
           }} 
           handleChange ={handleChange}
           />
           <Label text= "Contraseña" />
           <Input 
           attribute={{
            id: 'contraseña',
            name: 'contraseña',
            type: 'password',
            placeholder: 'Ingrese su Contraseña'
           }}
           handleChange={handleChange}
           />
           <button onClick={ (e) => handleSubmit }>
            Ingresar
           </button>
        </div>
    )
};
export default Login;