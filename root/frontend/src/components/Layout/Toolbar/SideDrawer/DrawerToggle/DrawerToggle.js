import React from 'react';
import classes from './drawerToggle.module.css';

const DrawerToggle = props => {
    let topBar, midBar, botBar = null;
    if (props.drawerOpen) {
        topBar = classes.TopBar;
        midBar = classes.MidBar;
        botBar = classes.BotBar;
    }
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div className={[classes.Bars, topBar].join(" ")}></div>
            <div className={[classes.Bars, midBar].join(" ")}></div>
            <div className={[classes.Bars, botBar].join(" ")}></div>
        </div>
    );
}
export default DrawerToggle;