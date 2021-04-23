import React from 'react';
import classes from './textArea.module.css';

const TextArea = props => {
    let textArea = (
        <textarea
            className={props.class}
            rows={props.rows}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} />
    );
    if (props.disabled) {
        textArea = (
            <textarea
                className={props.class}
                rows={props.rows}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                disabled="disabled" />
        );
    }
    return (
        <div className={classes.TextArea}>
            <label>{props.label}</label>
            {textArea}
            {props.children}
        </div>
    );
}
export default TextArea;