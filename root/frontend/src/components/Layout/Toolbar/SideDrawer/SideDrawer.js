import React from 'react';
import classes from './sideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = props => {
    return (
        <div className={classes.SideDrawer}>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}
export default SideDrawer;