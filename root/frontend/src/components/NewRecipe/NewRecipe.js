import React, { useState } from 'react';
import classes from './newRecipe.module.css';
import NumPicker from '../UI/NumPicker/NumPicker';
import Input from '../UI/Input/Input';
import TextArea from '../UI/TextArea/TextArea';
import DropDown from '../UI/DropDown/DropDown';
import TimePicker from '../UI/TimePicker/TimePicker';

const NewRecipe = () => {
    const [servingAmount, setAmount] = useState(1);
    const [foodType, setFoodType] = useState("Select");
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const numInRange = x => (Math.sign(x) === -1 && servingAmount !== 1) ||
                            (Math.sign(x) === 1 && servingAmount !== 99);
    
    const toggleDropDownMenu = () => setDropDownOpen(!dropDownOpen);
    const toggleFoodtype = type => { setFoodType(type); setDropDownOpen(false) }
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
                    <div className={classes.Mid}>
                        <NumPicker label="Servings" clicked={toggleAmount} amount={servingAmount} />
                        <TimePicker label="Cook Time" />
                        <DropDown 
                            label="Type" 
                            value={foodType} 
                            clicked={toggleDropDownMenu}
                            toggleFoodType={toggleFoodtype}
                            dropDownOpen={dropDownOpen} />
                    </div>
                </div>
                <div className={classes.Display}>
                    <Input label="Title" placeholder="Recipe name" />
                </div>
            </div>
        </div>
    );
}
export default NewRecipe;