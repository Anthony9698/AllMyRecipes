import React, { useEffect, useState } from 'react';
import classes from './recipeCardDetail.module.css';
import { ReactComponent as CloseIcon } from '../../../../assets/closeDetail.svg';
import { ReactComponent as EditIcon } from '../../../../assets/editRecipe.svg';
import Ingredients from './Ingredients/Ingredients';
import Instructions from './Instructions/Instructions';
import axios from 'axios';
import Loading from '../../../UI/Loading/Loading';

const RecipeCardDetail = props => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/api/recipes/" + props.id)
            .then(res => {
                setRecipe(res.data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [props.id])

    const selectIngredient = ingredientId => {
        let newRecipe = {...recipe};
        let newIngredients = recipe.ingredients.map(ing => {
            if (ing.id === ingredientId) {
                if (ing.selected) {
                    return {...ing, selected: !ing.selected}
                }
                return {...ing, selected: true};
            }
            return ing;
        });
        newRecipe.ingredients = newIngredients;
        setRecipe(newRecipe);
    }

    const selectInstruction = instructionId => {
        let newRecipe = {...recipe};
        let newInstructions = recipe.instructions.map(instr => {
            if (instr.id === instructionId) {
                if (instr.selected) {
                    return {...instr, selected: !instr.selected}
                }
                return {...instr, selected: true};
            }
            return instr;
        });
        newRecipe.instructions = newInstructions;
        setRecipe(newRecipe);
    }

    let content;
    if (loading || recipe == null) {
        content = <div className={classes.Loading}><Loading /></div>;
    } else {
        content = (
            <div>
                <div className={classes.CoverImgWrapper}>
                    <img src="http://placehold.it/500x333.jpg" alt="placeholder" />
                </div>
                <div className={classes.Description}>
                    <h4 className={classes.Title}>{recipe.title}</h4>
                    <button className={classes.Edit}><EditIcon /></button>
                    <h5>Ingredients</h5>
                    <Ingredients selectIngredient={selectIngredient}>{recipe.ingredients}</Ingredients>
                    <h5>Instructions</h5>
                    <Instructions selectInstruction={selectInstruction}>{recipe.instructions}</Instructions>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.RecipeCardDetail}>
            <button
                className={classes.Close}
                onClick={() => props.close(null)}><CloseIcon /></button>
            {content}
        </div>
    );
}
export default RecipeCardDetail;