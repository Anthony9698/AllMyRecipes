import React from 'react';
import classes from './inputButton.module.css';

const InputButton = props => {
    return (
        <div className={classes.InputButton}>
            {props.children}
        </div>
    );
}
export default InputButton;