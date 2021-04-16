import React, { useState } from 'react';
import classes from './layout.module.css';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './Toolbar/SideDrawer/SideDrawer';

const Layout = props => {
    // Declaring state for opening and closing sidedrawer
    const [showSideDrawer, openSideDrawer] = useState(false);

    return (
        <div className={classes.Layout}>
            <Toolbar />
            <main>
                {props.children}
            </main>
            <SideDrawer />
        </div>
    );
}
export default Layout;