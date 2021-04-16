import React, { useState } from 'react';
import classes from './layout.module.css';
import Toolbar from './Toolbar/Toolbar';
import Aux from '../Auxiliary';

const Layout = props => {
    // Declaring state for opening and closing sidedrawer
    const [showSideDrawer, openSideDrawer] = useState(false);

    return (
        <Aux>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </Aux>
    );
}
export default Layout;