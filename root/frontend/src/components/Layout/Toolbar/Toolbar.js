import React from 'react';
import classes from './toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';
import DrawerToggle from '../Toolbar/SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => (
    <div className={classes.Toolbar}>
        <header>
            <DrawerToggle />
            <Logo />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    </div>
);
export default Toolbar;