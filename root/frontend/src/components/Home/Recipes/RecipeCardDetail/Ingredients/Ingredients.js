import React from 'react';
import classes from './ingredients.module.css';
import Ingredient from './Ingredient/Ingredient';

const Ingredients = props => {
    return (
        <div className={classes.Ingredients}>
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
        </div>
    )
}
export default Ingredients;