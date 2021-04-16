import React from 'react';
import classes from './toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

const Toolbar = props => (
    <div className={classes.Toolbar}>
        <header>
            <Logo />
            <nav>
               <NavigationItems /> 
            </nav>
        </header>
    </div>
);
export default Toolbar;