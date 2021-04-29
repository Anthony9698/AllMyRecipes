import React from 'react';
import classes from './recipeCard.module.css';

const RecipeCard = props => {
    return (
        <div className={classes.RecipeCard} onClick={() => props.openDetail(props.id)}>
            <div className={classes.CoverImg}><img src="http://placehold.it/300x200.jpg" /></div>
            <div className={classes.Title}><h5>{props.title}</h5></div>
        </div>
    );
}
export default RecipeCard;