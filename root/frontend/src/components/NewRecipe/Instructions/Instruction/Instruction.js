import React from 'react';
import classes from './instruction.module.css';
import TextArea from '../../../UI/TextArea/TextArea';

const Instruction = props => {
    return (
        <div className={classes.Instruction}>
            <div className={classes.Bullet}></div>
            <TextArea rows="3" />
        </div>
    );
}
export default Instruction;