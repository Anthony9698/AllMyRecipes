import React from 'react';
import classes from './instructions.module.css';
import Instruction from './Instruction/Instruction';

const Instructions = props => {
    return (
        <div className={classes.Instructions}>
            <div className={classes.Label}>Instructions</div>
            <div className={classes.List}>
                {props.instructions.map((instruction, index) => (
                    <Instruction
                        key={index}
                        index={index}
                        selected={instruction.selected}
                        clicked={props.selectInstruction}
                        instrChanged={props.editInstructionDesc}
                        deleteInstr={props.deleteInstr}>{instruction.desc}</Instruction>
                ))}
            </div>
        </div>
    );
}
export default Instructions;