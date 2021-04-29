import React from 'react';
import classes from './ingredient.module.css';

const Ingredient = props => {
    return (
        <div className={classes.Ingredient}>
            <div className={classes.Bullet}></div>
            <div className={classes.Name}>Name</div>
        </div>
    )
}
export default Ingredient;