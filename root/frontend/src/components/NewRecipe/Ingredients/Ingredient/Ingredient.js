import React from 'react';
import classes from './ingredient.module.css';
import Input from '../../../UI/Input/Input';

const Ingredient = props => {
    let bulletStyles = classes.Bullet;
    let deleteStyles = classes.Delete;
    if (props.selected) {
        bulletStyles = [classes.Bullet, classes.Selected].join(" ");
        deleteStyles = [classes.Delete, classes.Selected].join(" ");
    }
    return (
        <div className={classes.Ingredient}>
            <div className={bulletStyles} onClick={() => props.clicked(props.index)}></div>
            <Input 
                value={props.children} 
                onChange={event => props.ingChanged(event, props.index)}
                disabled={!props.selected} />
            <div className={deleteStyles} onClick={() => props.deleteIng(props.index)}></div>
        </div>
    );
}
export default Ingredient;