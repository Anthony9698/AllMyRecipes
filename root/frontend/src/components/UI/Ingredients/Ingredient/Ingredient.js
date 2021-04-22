import React from 'react';
import classes from './ingredient.module.css';
import Input from '../../../UI/Input/Input';

const Ingredient = props => {
    let attachedStyles = classes.Bullet;
    if (props.selected) {
        attachedStyles = [classes.Bullet, classes.Selected].join(" ");
    }
    return (
        <div className={classes.Ingredient}>
            <div className={attachedStyles} onClick={() => props.clicked(props.index)}></div>
            {/* <span>{props.children}</span> */}
            <Input value={props.children} onChange={event => props.ingChanged(event, props.index)} />
            <div className={classes.Delete}></div>
        </div>
    );
}
export default Ingredient;