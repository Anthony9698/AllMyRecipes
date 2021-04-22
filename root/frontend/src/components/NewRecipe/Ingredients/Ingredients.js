import React from 'react';
import classes from './ingredients.module.css';
import Ingredient from './Ingredient/Ingredient';

const Ingredients = props => {
    return (
        <div className={classes.Ingredients}>
            <div className={classes.Label}>Ingredients</div>
            <div className={classes.List}>
                {props.ingredients.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        index={index}
                        selected={ingredient.selected}
                        clicked={props.selectIngredient}
                        ingChanged={props.editIngredientName}
                        deleteIng={props.deleteIng}>{ingredient.name}</Ingredient>
                ))}
            </div>
        </div>
    );
}
export default Ingredients;