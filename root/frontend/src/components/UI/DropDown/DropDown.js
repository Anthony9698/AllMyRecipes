import React from 'react';
import classes from './dropDown.module.css';
import { ReactComponent as Delta } from '../../../assets/dropDownDelta.svg';
import Menu from './Menu/Menu';

const DropDown = props => {
    return (
        <div className={classes.DropDown}>
            <label>{props.label}</label>
            <div className={classes.Input}>
                <span className={classes.Type}>{props.value}</span>
                <button className={classes.Delta} onClick={props.clicked}><Delta /></button>
                <Menu isOpen={props.dropDownOpen} clicked={props.toggleFoodType} />
            </div>
        </div>
    );
}
export default DropDown;