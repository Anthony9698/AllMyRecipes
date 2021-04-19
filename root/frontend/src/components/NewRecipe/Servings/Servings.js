import React, { useState } from 'react';
import classes from './servings.module.css';
import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import { ReactComponent as SubIcon } from '../../../assets/sub.svg';

const Servings = props => {
    return (
        <div className={classes.Servings}>
            <label htmlFor="recipeServings">{props.label}</label>
            <div id="recipeServings" className={classes.Wrapper}>
                <button onClick={() => props.clicked(-1)}><SubIcon /></button>
                <button className={classes.Amount}>{props.amount}</button>
                <button onClick={() => props.clicked(1)}><PlusIcon /></button>
            </div>
        </div>
    );
}
export default Servings;