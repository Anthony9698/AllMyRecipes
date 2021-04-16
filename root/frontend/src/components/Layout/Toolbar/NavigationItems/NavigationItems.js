import React from 'react';
import classes from './navigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>Upload</NavigationItem>
            <NavigationItem>New</NavigationItem>
            <NavigationItem>Logout</NavigationItem>
        </ul>
    );
}
export default NavigationItems;