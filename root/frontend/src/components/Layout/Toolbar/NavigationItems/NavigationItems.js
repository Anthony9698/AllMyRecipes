import React from 'react';
import classes from './navigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' exact>Home</NavigationItem>
            <NavigationItem link='/upload'>Upload</NavigationItem>
            <NavigationItem link='/new'>New</NavigationItem>
            <NavigationItem link="/logout">Logout</NavigationItem>
        </ul>
    );
}
export default NavigationItems;