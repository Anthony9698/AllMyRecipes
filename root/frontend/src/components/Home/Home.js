import React from 'react';
import classes from './home.module.css';
import Search from '../Search/Search';

const Home = props => {
    return (
        <div className={classes.Home}>
            <h1>My Recipes</h1>
            <Search />
        </div>
    );
}
export default Home;