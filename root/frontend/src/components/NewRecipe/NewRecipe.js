import React, { useState } from 'react';
import classes from './newRecipe.module.css';
import Servings from './Servings/Servings';
import Input from '../UI/Input/Input';
import TextArea from '../UI/TextArea/TextArea';

const NewRecipe = () => {
    const [servingAmount, setAmount] = useState(1);
    const numInRange = x => (Math.sign(x) === -1 && servingAmount !== 1) ||
        (Math.sign(x) === 1 && servingAmount !== 99);
    const toggleAmount = x => numInRange(x) ? setAmount(prevAmt => prevAmt + x) : servingAmount;

    return (
        <div className={classes.NewRecipe}>
            <h1>New Recipe</h1>
            <div className={classes.MainContent}>
                <div className={classes.Info}>
                    <Input label="Title" placeholder="Recipe name" />
                    <TextArea label="Description" placeholder="Recipe description" rows="3" />
                    <Input label="Add Ingredient" placeholder="Ingredient name" add />
                    <Input label="Add Instruction" placeholder="Instruction step" add />
                    <Servings label="Servings" clicked={toggleAmount} amount={servingAmount} />
                </div>
                <div className={classes.Display}>
                    <Input label="Title" placeholder="Recipe name" />
                </div>
            </div>
        </div>
    );
}
export default NewRecipe;