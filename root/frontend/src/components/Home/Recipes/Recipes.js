import React from 'react';
import classes from './recipes.module.css';
import RecipeCard from './RecipeCard/RecipeCard';

const Recipes = () => {
    return (
        <div className={classes.Recipes}>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    );
}
export default Recipes;