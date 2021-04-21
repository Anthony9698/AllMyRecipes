import React from 'react';
import classes from './ingredient.module.css';

const Ingredient = props => {
    return (
        <div className={classes.Ingredient}>
            <div className={classes.Bullet}></div>
            <span className={classes.Text}>{props.children}</span>
        </div>
    );
}
export default Ingredient;