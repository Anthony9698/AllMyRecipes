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
import Ingredients from './Ingredients/Ingredients';
import Instructions from './Instructions/Instructions';
import AddButton from '../UI/AddButton/AddButton';

const NewRecipe = () => {
    const [recipeTitle, setRecipeTitle] = useState("Recipe Title")
    const [currIngredient, setCurrIngredient] = useState("");
    const [servings, setAmount] = useState(1);
    const [foodType, setFoodType] = useState("Select");
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [visibility, setVisibility] = useState("private");
    const [ingredients, setIngredients] = useState([]);

    const numInRange = x => (Math.sign(x) === -1 && servings !== 1) ||
        (Math.sign(x) === 1 && servings !== 99);

    const toggleRecipeTitle = event => setRecipeTitle(event.target.value);
    const toggleCurrIngredient = event => setCurrIngredient(event.target.value);
    const toggleDropDownMenu = () => setDropDownOpen(!dropDownOpen);
    const toggleFoodtype = type => { setFoodType(type); setDropDownOpen(false) }
    const toggleAmount = x => numInRange(x) ? setAmount(prevAmt => prevAmt + x) : servings;
    const toggleMinutes = event => setMinutes(event.target.value);
    const toggleHours = event => setHours(event.target.value);
    const toggleVisibility = event => setVisibility(event.target.value);
    const addIngredient = event => {
        if (currIngredient !== "") {
            setIngredients(prevIngredients => [...prevIngredients, { name: currIngredient, selected: false }]);
            setCurrIngredient("");
        }
    }
    const selectIngredient = index => {
        let currIngredients = [...ingredients];
        currIngredients[index].selected = !currIngredients[index].selected;
        setIngredients(currIngredients);
    }

    const editIngredientName = (event, index) => {
        let currIngredients = [...ingredients];
        currIngredients[index].name = event.target.value;
        setIngredients(currIngredients);
    }

    const deleteIng = index => {
        let currIngredients = [...ingredients];
        currIngredients = currIngredients.slice(0, index)
            .concat(currIngredients
                .slice(index + 1, currIngredients.length));
        setIngredients(currIngredients);
    }

    return (
        <div className={classes.NewRecipe}>
            <h1>New Recipe</h1>
            <div className={classes.MainContent}>
                <div className={classes.Info}>
                    <Input
                        class="form-control"
                        label="Title"
                        placeholder="Recipe name"
                        onChange={toggleRecipeTitle} />
                    <TextArea class="form-control" label="Description" placeholder="Recipe description" rows="3" />
                    <Input
                        class="form-control"
                        label="Add Ingredient"
                        placeholder="Ingredient name"
                        onChange={toggleCurrIngredient}
                        value={currIngredient}>
                        <AddButton clicked={addIngredient} />
                    </Input>
                    {/* <Input 
                        class="form-control" 
                        label="Add Instruction" 
                        placeholder="Instruction step" 
                        add /> */}
                    <TextArea class="form-control" label="Add Instruction" placeholder="Instruction Step" rows="3" />
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
                    <h5>{recipeTitle === "" ? "Recipe Title" : recipeTitle}</h5>
                    <CoverImage />
                    <div className={classes.RecipeIcons}>
                        <RecipeIcons
                            cookTime={hours + ":" + minutes}
                            servings={servings > 1 ? servings + " servings" : servings + " serving"}
                            visibility={visibility} />
                    </div>
                    <Ingredients
                        ingredients={ingredients}
                        selectIngredient={selectIngredient}
                        editIngredientName={editIngredientName}
                        deleteIng={deleteIng} />
                    <Instructions />
                </div>
            </div>
        </div>
    );
}
export default NewRecipe;