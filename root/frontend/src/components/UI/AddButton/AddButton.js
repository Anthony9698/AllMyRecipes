import React from 'react';
import classes from './addButton.module.css';
import { ReactComponent as AddIcon } from '../../../assets/add.svg';

const AddButton = props => {
    return (
        <button className={classes.AddButton} onClick={props.clicked} type="button">
            <AddIcon />
        </button>
    );
}
export default AddButton;