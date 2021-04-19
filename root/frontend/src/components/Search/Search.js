import React from 'react';
import classes from './search.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const Search = props => {
    return (
        <div className={classes.Search}>
            <input type="text" placeholder={props.placeholder} />
            <button className={classes.SearchIcon}>
                <SearchIcon />
            </button>
        </div>
    );
}
export default Search;