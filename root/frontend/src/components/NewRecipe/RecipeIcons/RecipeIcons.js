import React from 'react';
import classes from './recipeIcons.module.css';
import { ReactComponent as CookTimeIcon } from '../../../assets/cookTime.svg';
import { ReactComponent as ServingsIcon } from '../../../assets/servings.svg';
import { ReactComponent as LockIcon } from '../../../assets/lock.svg';

const RecipeIcons = props => {
    let lockIconStyles = [classes.Icon, classes.Faded].join(" ");
    if (props.visibility === 'private') {
        lockIconStyles = classes.Icon;
    }

    return (
        <div className={classes.RecipeIcons}>
            <div className={classes.Icon}>
                <ServingsIcon />
                <div>{props.servings}</div>
            </div>
            <div className={classes.Icon}>
                <CookTimeIcon />
                <div>{props.cookTime}</div>
            </div>
            <div className={lockIconStyles}>
                <LockIcon />
                <div>{props.visibility}</div>
            </div>
        </div>
    );
}
export default RecipeIcons;