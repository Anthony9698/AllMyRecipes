import React from 'react';
import classes from './radio.module.css';

const Radio = props => {
    return (
        <label className={classes.Radio}>
            <input 
                type="radio" 
                name={props.name}
                value={props.value}
                onChange={props.onChange} 
                checked={props.checked}></input>
            <div className={classes.Selection}></div>
            {props.children}
        </label>
    );
}
export default Radio;