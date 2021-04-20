import React from 'react';
import classes from './timePicker.module.css';

const TimePicker = props => {
    return (
        <div className={classes.TimePicker}>
            <label>{props.label}</label>
            <div className={classes.Wrapper}>
                <input className="Hours" type="text" maxLength="2" size="2" placeholder="hh"></input>
                <span>:</span>
                <input className="Minutes" type="text" maxLength="2" size="2" placeholder="mm"></input>
            </div>
        </div>
    );
}
export default TimePicker;