import React from 'react';
import classes from './drawerToggle.module.css';
import { useSideDrawer, useSideDrawerUpdate } from '../SideDrawerContext';

const DrawerToggle = props => {
    let topBar, midBar, botBar = null;
    const isSideDrawerOpen = useSideDrawer();
    const toggleSideDrawer = useSideDrawerUpdate();
    if (isSideDrawerOpen) {
        topBar = classes.TopBar;
        midBar = classes.MidBar;
        botBar = classes.BotBar;
    }
    return (
        <div className={classes.DrawerToggle} onClick={toggleSideDrawer}>
            <div className={[classes.Bars, topBar].join(" ")}></div>
            <div className={[classes.Bars, midBar].join(" ")}></div>
            <div className={[classes.Bars, botBar].join(" ")}></div>
        </div>
    );
}
export default DrawerToggle;