import React from 'react';
import classes from './sideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import { useSideDrawer } from '../../../../context/SideDrawerContext';

const SideDrawer = props => {
    let attachedStyles = [classes.SideDrawer, classes.Close].join(' ');
    let sideDrawerOpen = useSideDrawer();
    if (sideDrawerOpen) {
        attachedStyles = [classes.SideDrawer, classes.Open].join(' ');
        console.log("open");
    }

    return (
        <div className={attachedStyles}>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}
export default SideDrawer;