import React, { useState } from 'react';
import classes from './newRecipe.module.css';
import NumPicker from '../UI/NumPicker/NumPicker';
import Input from '../UI/Input/Input';
import TextArea from '../UI/TextArea/TextArea';
import DropDown from '../UI/DropDown/DropDown';
import TimePicker from '../UI/TimePicker/TimePicker';
import Radio from '../UI/Radio/Radio';
import CoverImage from './CoverImage/CoverImage';
import RecipeIcons from './RecipeIcons/RecipeIcons';

const NewRecipe = () => {
    const [servings, setAmount] = useState(1);
    const [foodType, setFoodType] = useState("Select");
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [visibility, setVisibility] = useState("private");

    const numInRange = x => (Math.sign(x) === -1 && servings !== 1) ||
        (Math.sign(x) === 1 && servings !== 99);

    const toggleDropDownMenu = () => setDropDownOpen(!dropDownOpen);
    const toggleFoodtype = type => { setFoodType(type); setDropDownOpen(false) }
    const toggleAmount = x => numInRange(x) ? setAmount(prevAmt => prevAmt + x) : servings;
    const toggleMinutes = event => setMinutes(event.target.value);
    const toggleHours = event => setHours(event.target.value);
    const toggleVisibility = event => setVisibility(event.target.value);

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
                        <NumPicker label="Servings" clicked={toggleAmount} amount={servings} />
                        <TimePicker
                            label="Cook Time"
                            minutes={minutes}
                            toggleMinutes={toggleMinutes}
                            hours={hours}
                            toggleHours={toggleHours} />
                        <DropDown
                            label="Type"
                            value={foodType}
                            clicked={toggleDropDownMenu}
                            toggleFoodType={toggleFoodtype}
                            dropDownOpen={dropDownOpen} />
                    </div>
                    <Radio
                        name="recipeVisibility"
                        value="private"
                        checked={visibility === 'private'}
                        onChange={toggleVisibility}>Private Recipe (Only I can see this)</Radio>
                    <Radio
                        name="recipeVisibility"
                        value="public"
                        checked={visibility === 'public'}
                        onChange={toggleVisibility}>Public Recipe (Anyone can see this)</Radio>
                </div>
                <div className={classes.Display}>
                    <CoverImage />
                    <div className={classes.RecipeIcons}>
                        <RecipeIcons
                            cookTime={hours + ":" + minutes}
                            servings={servings > 1 ? servings + " servings" : servings + " serving"}
                            visibility={visibility} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewRecipe;