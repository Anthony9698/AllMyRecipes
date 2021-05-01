import React from 'react';
import Instruction from './Instruction/Instruction';
import classes from './instructions.module.css';

const Instructions = props => {
    return (
        <div className={classes.Instructions}>
            {
                props.children.map(instruction => (
                    <Instruction
                        key={instruction.id}
                        id={instruction.id}
                        step={instruction.step}
                        desc={instruction.description}
                        selected={instruction.selected}
                        clicked={props.selectInstruction} />
                ))
            }
        </div>
    );
}
export default Instructions;