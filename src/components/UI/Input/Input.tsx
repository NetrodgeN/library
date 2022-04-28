import React, {FC} from 'react';
import classes from './Input.module.css'

interface InputProps{
    onChange: any;
    value:string;
    placeholder:string;
}

const Input:FC<InputProps>  = (props) => {
    return (
        <input
            className={classes.input}
            type="text"
            {...props}
        />
    );
};

export default Input;