import React from "react";
import './input.css';

const Input = ( { attribute, handleChange, param } ) => {
    return (
        <div>
            <input id={attribute.id}
                  name={attribute.name} 
                  placeholder={attribute.placeholder} 
                  type= {attribute.type} 
                  onChange={ (e) => handleChange(e.target.name, e.target.value)} 
                  className= 'regular-swtyle'
                  />
            <input id="" name="" placeholder="ingrese su contraseña" type="password" onChange={(e) => handleChange(e.target.name, e.target.value)} className=""/>
        </div>
    )
};
export default Input;