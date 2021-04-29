import React from 'react';
import Instruction from './Instruction/Instruction';
import classes from './instructions.module.css';

const Instructions = props => {
    return (
        <div className={classes.Instructions}>
            <Instruction>
                In a bowl, combine chicken with all of the ingredients for
                the chicken marinade; let marinate for 10 minutes to an hour 
                (or overnight if time allows).
            </Instruction>
            <Instruction>
                In a bowl, combine chicken with all of the ingredients for
                the chicken marinade;
            </Instruction>
        </div>
    );
}
export default Instructions;