import React from 'react';
import classes from './input.module.css';
import { ReactComponent as AddIcon } from '../../../assets/add.svg';

const Input = props => {
    let addButton = null;
    if (props.add) {
        addButton = (
            <button className={classes.Add}>
                <AddIcon />
            </button>
        );
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            <input
                type="text"
                className="form-control"
                placeholder={props.placeholder}
                onChange={props.onChange} />
            {addButton}
        </div>
    );
}
export default Input;