import React from 'react';
import classes from './input.module.css';

const Input = props => {
    let input = (
        <input
            type="text"
            maxLength="64"
            className={props.class}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value} />
    );
    if (props.disabled) {
        input = (
            <input
                type="text"
                maxLength="64"
                className={props.class}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                disabled="disabled" />
        );
    }

    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {input}
            {props.children}
        </div>
    );
}
export default Input;