import React from 'react';
import classes from './search.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import Input from '../UI/Input/Input';
import InputButton from '../UI/InputButton/InputButton';

const Search = props => {
    return (
        <div className={classes.Search}>
            <Input class={"form-control"} placeholder="Recipe Name">
                <InputButton><SearchIcon /></InputButton>
            </Input>
        </div>
    );
}
export default Search;