import React, { useState } from "react";
import "./login.css";
import Title from "./components/Title/title";
import Label from "./components/Label/label";
import Input from "./components/Input/input";

const Login = () => {
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [IsLogin, setIsLogin] = useState(false);
    const [ hasError, setHasError ] = useState(false);

    //Variable para almacenar usuario
    function handleChange (name, value) {
     if(name == 'usuario'){
      setUser(value)
     }else{
        if(value < 8){
            setPasswordError(true);
        } else{
        setPasswordError(false);
        setPassword(value)
        }
     }
    };
    function  ifMacht(param){
        if(param.user.lenght > 0 && param.password.lenght > 0){
            if(param.user == "" && param.password == "123456789"){
                const { user, password } = param;
                let ac = { user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('accont', account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        }else{
            setIsLogin(false);
        }
    }
    function handleSubmit(){
        let account = { user, password }
        if(account){
            ifMacht(account);
        }
    };
    return (
        <div className="login-container">
           <Title text= "¡Bienvenidos! " />
           <Label className="label-alert">
            Su contraseña o usuario son incorrectos, o no existen en nuestra app
           </Label>
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
           param={passwordError}
           />
           { passwordError &&
             <label className="label-error"> 
              Contraseña inválida o incompleta
              </label>
           }
           <div className="submit-button-container">
           <button onClick={ handleSubmit } className="submit">
            Ingresar
           </button>
           </div>
        </div>
    )
};
export default Login;