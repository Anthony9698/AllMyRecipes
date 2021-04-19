import React from 'react';
import classes from './newRecipe.module.css';

const NewRecipe = () => {
    return (
        <div className={classes.NewRecipe}>
            <h1>New Recipe</h1>
            <div className={classes.MainContent}>
                <div className={classes.Info}>
                    <div class={[classes.FormGroup, "form-group"].join(" ")}>
                        <label for="recipeTitle">Title</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="recipeTitle" 
                            placeholder="Enter recipe name" />
                    </div>
                    <div class={[classes.FormGroup, "form-group"].join(" ")}>
                        <label for="recipeDescription">Description</label>
                        <textarea 
                            class="form-control" 
                            id="recipeDescription" 
                            rows="3" 
                            spellcheck="true"
                            placeholder="Recipe description..."></textarea>
                    </div>
                </div>
                <div className={classes.Display}>
                    <div class={[classes.FormGroup, "form-group"].join(" ")}>
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="exampleInputEmail1" placeholder="Enter email" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewRecipe;