import React from 'react';
import classes from './instruction.module.css';

const Instruction = props => {
    return (
        <div className={classes.Instruction}>
            <div className={classes.Bullet}>2</div>
            <p>{props.children}</p>
        </div>
    )
}
export default Instruction;