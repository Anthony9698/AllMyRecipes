import React from 'react';
import classes from './ingredient.module.css';

const Ingredient = props => {
    let attachedStyles = classes.Bullet;
    if (props.selected) {
        attachedStyles = [classes.Bullet, classes.Selected].join(" ");
    }
    return (
        <div className={classes.Ingredient}>
            <div className={attachedStyles} onClick={() => props.clicked(props.index)}></div>
            <span className={classes.Text}>{props.children}</span>
            <div className={classes.Delete}></div>
        </div>
    );
}
export default Ingredient;