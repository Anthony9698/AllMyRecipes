import React from 'react';
import classes from './ingredient.module.css';
import { ReactComponent as Checkmark } from '../../../../../../assets/checkmark2.svg';

const Ingredient = props => {
    let nameStyle = classes.Name;
    let checkmark = null;
    if (props.selected) {
        nameStyle = [classes.Name, classes.Strike].join(" ");
        checkmark = <div className={classes.Selected}><Checkmark /></div>;
    }
    return (
        <div className={classes.Ingredient}>
            <div className={classes.Bullet} onClick={() => props.clicked(props.id)}>
                {checkmark}
            </div>
            <div className={nameStyle}>{props.name}</div>
        </div>
    )
}
export default Ingredient;