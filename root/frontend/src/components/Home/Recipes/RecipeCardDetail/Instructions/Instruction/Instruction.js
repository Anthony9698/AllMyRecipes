import React from 'react';
import classes from './instruction.module.css';
import { ReactComponent as CheckMark } from '../../../../../../assets/checkmark2.svg';

const Instruction = props => {
    let bulletStyles = classes.Bullet;
    let descStyle = classes.Desc;
    let checkmark = null;
    if (props.selected) {
        bulletStyles = [classes.Bullet, classes.Active].join(" ");
        descStyle = [classes.Desc, classes.Strike].join(" ");
        checkmark = <div className={classes.Selected}><CheckMark /></div>;
    }
    return (
        <div className={classes.Instruction}>
            <div className={bulletStyles} onClick={() => props.clicked(props.id)}>
                {props.step}
                {checkmark}
            </div>
            <p className={descStyle}>{props.desc}</p>
        </div>
    )
}
export default Instruction;