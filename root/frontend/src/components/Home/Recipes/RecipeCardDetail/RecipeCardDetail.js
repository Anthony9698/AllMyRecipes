import React from 'react';
import classes from './recipeCardDetail.module.css';
import { ReactComponent as CloseIcon } from '../../../../assets/closeDetail.svg';
import { ReactComponent as EditIcon } from '../../../../assets/editRecipe.svg';
import Ingredients from './Ingredients/Ingredients';

const RecipeCardDetail = props => {
    return (
        <div className={classes.RecipeCardDetail}>
            <button className={classes.Close}><CloseIcon /></button>
            <div className={classes.CoverImgWrapper}>
                <img src="http://placehold.it/500x333.jpg" />
            </div>
            <div className={classes.Description}>
                <h4 className={classes.Title}>Recipe Name</h4>
                <button className={classes.Edit}><EditIcon /></button>
                <h5>Ingredients</h5>
                <Ingredients />
            </div>
        </div>
    );
}
export default RecipeCardDetail;