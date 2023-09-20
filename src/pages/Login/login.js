import React from "react";
import "./login.css";
import Title from "./components/Title/title";
import Label from "./components/Label/Label";
import input from "./components/input/input";

const Login = () => {
    return (
        <div className="">
           <Title text= "Hola bienvenidos a " />
           <Label text= "ingrese su usario" />
           <Input />
           <Label text= "Contraseña" />
           <Input />
        </div>
    )
};
export default Login;