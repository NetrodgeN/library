import React, { FC } from 'react';
import classes from './Input.module.css';

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder: string;
  name?: string;
  onBlur?: any;
}

const Input: FC<InputProps> = (props) => {
  return <input className={classes.input} type="text" {...props} />;
};

export default Input;