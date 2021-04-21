import React from 'react';
import classes from './ingredient.module.css';

const Ingredient = props => {
    return (
        <div className={classes.Ingredient}>
            {/* <div className={classes.Bullet}></div> */}
            <div className={[classes.Bullet, classes.Selected].join(" ")}></div>
            <span className={classes.Text}>{props.children}</span>
            <div className={classes.Delete}></div>
        </div>
    );
}
export default Ingredient;