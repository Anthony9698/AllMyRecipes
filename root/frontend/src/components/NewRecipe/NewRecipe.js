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
import axios from 'axios';

const NewRecipe = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [currIngredient, setCurrIngredient] = useState("");
    const [currInstruction, setCurrInstruction] = useState("");
    const [servings, setServings] = useState(1);
    const [foodType, setFoodType] = useState("Select");
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [minutes, setMinutes] = useState("00");
    const [hours, setHours] = useState("00");
    const [visibility, setVisibility] = useState("private");
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    const numInRange = x => (Math.sign(x) === -1 && servings !== 1) ||
        (Math.sign(x) === 1 && servings !== 99);

    const toggleTitle = event => setTitle(event.target.value);
    const toggleDescription = event => setDescription(event.target.value);
    const toggleCurrIngredient = event => setCurrIngredient(event.target.value);
    const toggleCurrInstruction = event => setCurrInstruction(event.target.value);
    const toggleDropDownMenu = () => setDropDownOpen(!dropDownOpen);
    const toggleFoodtype = type => { setFoodType(type); setDropDownOpen(false) }
    const toggleAmount = x => numInRange(x) ? setServings(prevAmt => prevAmt + x) : servings;
    const toggleMinutes = event => setMinutes(event.target.value);
    const toggleHours = event => setHours(event.target.value);
    const toggleVisibility = event => setVisibility(event.target.value);
    const addIngredient = event => {
        if (currIngredient !== "") {
            setIngredients(prevIngredients => [...prevIngredients, { name: currIngredient, selected: false }]);
            setCurrIngredient("");
        }
    }
    const addInstruction = event => {
        if (currInstruction !== "") {
            setInstructions(prevInstructions => {
                return [...prevInstructions,
                {
                    stepNum: 1,
                    desc: currInstruction,
                    selected: false
                }];
            });
            setCurrInstruction("");
        }
    }
    const selectIngredient = index => {
        let currIngredients = [...ingredients];
        currIngredients[index].selected = !currIngredients[index].selected;
        setIngredients(currIngredients);
    }

    const selectInstruction = index => {
        let currInstructions = [...instructions];
        currInstructions[index].selected = !currInstructions[index].selected;
        setInstructions(currInstructions);
    }

    const editIngredientName = (event, index) => {
        let currIngredients = [...ingredients];
        currIngredients[index].name = event.target.value;
        setIngredients(currIngredients);
    }

    const editInstructionDesc = (event, index) => {
        let currInstructions = [...instructions];
        currInstructions[index].desc = event.target.value;
        setInstructions(currInstructions);
    }

    const deleteIng = index => {
        let currIngredients = [...ingredients];
        currIngredients = currIngredients.slice(0, index)
            .concat(currIngredients
                .slice(index + 1, currIngredients.length));
        setIngredients(currIngredients);
    }

    const deleteInstr = index => {
        let currInstructions = [...instructions];
        currInstructions = currInstructions.slice(0, index)
            .concat(currInstructions
                .slice(index + 1, currInstructions.length));
        setInstructions(currInstructions);
    }

    const getCookTime = () => {
        let hh = hours;
        let mm = minutes;

        if (hh.length < 2) { hh = "0" + hh }
        if (mm.length < 2) { mm = "0" + mm }

        return hh + ":" + mm; 
    }

    const validForm = () => {
        return (
            title !== "" &&
            description !== "" &&
            ingredients.length >= 1 &&
            instructions.length >= 1 &&
            !isNaN(minutes) &&
            !isNaN(hours) &&
            foodType !== "Select" &&
            (visibility === 'private' || visibility === 'public')
        );
    }

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setIngredients([]);
        setInstructions([]);
        setHours(0);
        setMinutes(0);
        setServings(1);
        setFoodType("Select");
        setVisibility("private");
    }

    const submitForm = event => {
        event.preventDefault();
        
        if (validForm()) {
            axios({
                method: "POST",
                url: "http://localhost:8080/api/recipes",
                data: {
                    title: title,
                    description: description,
                    ingredients: ingredients.map(i => ({name: i.name})),
                    instructions: instructions.map(i => ({description: i.desc, step: i.stepNum})),
                    servings: servings,
                    cookTime: getCookTime(),
                    foodType: foodType,
                    visibility: visibility
                }
            })
            .then(() => {
                alert("Recipe was created!");
                resetForm();
            })
            .catch(error => {
                alert("There was an error creating this recipe...");
                console.log(error);
            });
        }
    }

    return (
        <div className={classes.NewRecipe}>
            <h1>New Recipe</h1>
            <div className={classes.MainContent}>
                <form className={classes.Form} onSubmit={submitForm}>
                    <Input
                        class="form-control"
                        label="Title"
                        placeholder="Recipe name"
                        onChange={toggleTitle}
                        value={title} />
                    <TextArea 
                        class="form-control" 
                        label="Description" 
                        placeholder="Recipe description" 
                        rows="3"
                        onChange={toggleDescription}
                        value={description} />
                    <Input
                        class="form-control"
                        label="Add Ingredient"
                        placeholder="Ingredient name"
                        onChange={toggleCurrIngredient}
                        value={currIngredient}>
                        <AddButton clicked={addIngredient} />
                    </Input>
                    <TextArea
                        class="form-control"
                        label="Add Instruction"
                        placeholder="Instruction Step"
                        rows="3"
                        value={currInstruction}
                        onChange={toggleCurrInstruction}>
                        <AddButton clicked={addInstruction} />
                    </TextArea>
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
                    <button
                        className={["btn", "btn-success", classes.Save].join(" ")}
                        type="submit">Add</button>
                </form>
                <div className={classes.Display}>
                    <h5>{title === "" ? "Recipe Title" : title}</h5>
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
                    <Instructions
                        instructions={instructions}
                        selectInstruction={selectInstruction}
                        editInstructionDesc={editInstructionDesc}
                        deleteInstr={deleteInstr} />
                </div>
            </div>
        </div>
    );
}
export default NewRecipe;