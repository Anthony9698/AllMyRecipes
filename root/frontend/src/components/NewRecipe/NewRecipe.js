import React from 'react';
import classes from './newRecipe.module.css';
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import Servings from '../UI/Servings/Servings';

const NewRecipe = () => {
    return (
        <div className={classes.NewRecipe}>
            <h1>New Recipe</h1>
            <div className={classes.MainContent}>
                <div className={classes.Info}>
                    <div className={[classes.FormGroup, "form-group"].join(" ")}>
                        <label htmlFor="recipeTitle">Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="recipeTitle" 
                            placeholder="Enter recipe name" />
                    </div>
                    <div className={[classes.FormGroup, "form-group"].join(" ")}>
                        <label htmlFor="recipeDescription">Description</label>
                        <textarea 
                            className="form-control" 
                            id="recipeDescription" 
                            rows="3" 
                            spellCheck="true"
                            placeholder="Recipe description"></textarea>
                    </div>
                    <div className={[classes.FormGroup, "form-group"].join(" ")}>
                        <label htmlFor="recipeIngredient">Add Ingredient</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="recipeIngredient" 
                            placeholder="Ingredient name" />
                        <button className={classes.Add}>
                            <AddIcon />
                        </button>
                    </div>
                    <div className={[classes.FormGroup, "form-group"].join(" ")}>
                        <label htmlFor="recipeInstruction">Add Instruction</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="recipeInstruction" 
                            placeholder="Instruction step" />
                        <button className={classes.Add}>
                            <AddIcon />
                        </button>
                    </div>
                    <div className={[classes.FormGroup, "form-group"].join(" ")}>
                        <label htmlFor="recipeServings">Servings</label>
                        <Servings id="recipeServings" />
                    </div>
                </div>
                <div className={classes.Display}>
                    <div className={[classes.FormGroup, "form-group"].join(" ")}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" placeholder="Enter email" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewRecipe;