import React from 'react';
import classes from './home.module.css';
import Search from '../Search/Search';
import Recipes from './Recipes/Recipes';
import RecipeCardDetail from './Recipes/RecipeCardDetail/RecipeCardDetail';

const Home = props => {
    return (
        <div className={classes.Home}>
            <h1>My Recipes</h1>
            <div className={classes.Search}><Search placeholder="Recipe Name..." /></div>
            <Recipes />
            <RecipeCardDetail />
        </div>
    );
}
export default Home;