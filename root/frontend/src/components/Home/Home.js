import React, { useEffect, useState } from 'react';
import classes from './home.module.css';
import Search from '../Search/Search';
import Recipes from './Recipes/Recipes';
import RecipeCardDetail from './Recipes/RecipeCardDetail/RecipeCardDetail';
import axios from 'axios';

const Home = props => {
    const [recipes, setRecipes] = useState([]);
    const [recipeDetailId, setRecipeDetailId] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/recipes")
            .then(res => setRecipes(res.data))
            .catch(error => console.log(error));
    }, []);

    const toggleRecipeDetailId = id => {
        setRecipeDetailId(id);
    }

    let recipeDetail = null;
    if (recipeDetailId) {
        recipeDetail = <RecipeCardDetail detailId={recipeDetailId} close={toggleRecipeDetailId} />;
    }

    return (
        <div className={classes.Home}>
            <h1>My Recipes</h1>
            <div className={classes.Search}><Search placeholder="Recipe Name..." /></div>
            <Recipes openRecipeDetail={toggleRecipeDetailId}>{recipes}</Recipes>
            {recipeDetail}
        </div>
    );
}
export default Home;