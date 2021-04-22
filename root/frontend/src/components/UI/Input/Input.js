import React from 'react';
import classes from './input.module.css';

const Input = props => {
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            <input
                type="text"
                // className="form-control"
                className={props.class}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value} />
            {props.children}
        </div>
    );
}
export default Input;