import React from 'react';
import classes from './instruction.module.css';
import TextArea from '../../../UI/TextArea/TextArea';

const Instruction = props => {
    let bulletStyles = classes.Bullet;
    let deleteStyles = classes.Delete;
    if (props.selected) {
        bulletStyles = [classes.Bullet, classes.Selected].join(" ");
        deleteStyles = [classes.Delete, classes.Selected].join(" ");
    }
    return (
        <div className={classes.Instruction}>
            <div className={bulletStyles} onClick={() => props.clicked(props.index)}></div>
            <TextArea
                rows="3"
                value={props.children}
                onChange={event => props.instrChanged(event, props.index)}
                disabled={!props.selected} />
            <div className={deleteStyles} onClick={() => props.deleteInstr(props.index)}></div>
        </div>
    );
}
export default Instruction;