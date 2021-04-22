import React from 'react';
import classes from './textArea.module.css';

const TextArea = props => {
    return (
        <div className={classes.TextArea}>
            <label>{props.label}</label>
            <textarea
                className={props.class}
                id="recipeDescription"
                rows={props.rows}
                placeholder={props.placeholder}></textarea>
        </div>
    );
}
export default TextArea;