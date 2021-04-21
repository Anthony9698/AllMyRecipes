import React from 'react';
import classes from './ingredients.module.css';
import Ingredient from './Ingredient/Ingredient';

const Ingredients = props => {
    return (
        <div className={classes.Ingredients}>
            <div className={classes.Label}>Ingredients</div>
            <div className={classes.IngredientList}>
                <Ingredient>Ingredient Name</Ingredient>
                <Ingredient>Ingredient Name</Ingredient>
                <Ingredient>Ingredient Name</Ingredient>
                <Ingredient>Ingredient Name</Ingredient>
                <Ingredient>Ingredient Name</Ingredient>
                <Ingredient>Ingredient Name</Ingredient>
                <Ingredient>Ingredient Name</Ingredient>
                <Ingredient>Ingredient Name</Ingredient>
            </div>
        </div>
    );
}
export default Ingredients;