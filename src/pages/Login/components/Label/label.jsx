import React from 'react';
import Title from './componentes/Title/title';
import Label from './componentes/Label/label';

const label = ({ text }) => {
    return (
        <div>
            <Label> {text} </Label>
            <Title text='Bienvenidos '/>
        </div>
    )
};
export default label;
