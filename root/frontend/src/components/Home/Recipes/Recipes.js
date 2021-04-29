import React from 'react';
import classes from './recipes.module.css';
import RecipeCard from './RecipeCard/RecipeCard';

const Recipes = props => {
    return (
        <div className={classes.Recipes}>
            {
                props.children.map(recipe => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id} 
                        openDetail={props.openRecipeDetail} 
                        title={recipe.title} />
                ))
            }
        </div>
    );
}
export default Recipes;