import React from 'react';
import classes from './ingredients.module.css';
import Ingredient from './Ingredient/Ingredient';

const Ingredients = props => {
    return (
        <div className={classes.Ingredients}>
            {
                props.children.map(ing => (
                    <Ingredient 
                        key={ing.id}
                        id={ing.id}
                        name={ing.name}
                        selected={ing.selected}
                        clicked={props.selectIngredient} />
                ))
            }
        </div>
    )
}
export default Ingredients;