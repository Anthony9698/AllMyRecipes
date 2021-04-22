import React from 'react';
import classes from './instructions.module.css';
import Instruction from './Instruction/Instruction';

const Instructions = props => {
    return (
        <div className={classes.Instructions}>
            <div className={classes.Label}>Instructions</div>
            <div className={classes.List}>
                <Instruction />
                <Instruction />
                <Instruction />
            </div>
        </div>
    );
}
export default Instructions;