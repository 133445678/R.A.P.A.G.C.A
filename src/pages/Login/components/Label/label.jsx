import React from 'react';
import Title from './Title/title';
import Label from './Label/label';

const label = ({ text }) => {
    return (
        <div>
            <Label> {text} </Label>
            <title text='Bienvenidos '/>
        </div>
    )
};

export default Label;
