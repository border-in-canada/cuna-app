import React from 'react';
import { Input, Numeric } from 'react-formalized';

const input = (props) => {
    let inputElement = null;
    
    switch(props.elementType) {
        case ('input'):
            inputElement = <Input 
            type={props.type}
            placeholder={props.placeholder}
            validation={{...props.validation}} 
            value={props.value}
            onChange={props.changed}/>;
            break;
        case ('numeric'):
            inputElement = <Numeric 
            type={props.type}
            placeholder={props.placeholder}
            required={props.required} 
            value={props.value}
            onChange={props.changed}/>;
            break;
        default:
            inputElement = <Input 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}/>;
    }
    return (
    <div>
        {inputElement}
    </div>
)};

export default input;