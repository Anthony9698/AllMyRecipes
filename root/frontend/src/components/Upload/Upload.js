import React from 'react';
import classes from './upload.module.css';
import Search from '../Search/Search';

const Upload = () => {
    return (
        <div className={classes.Upload}>
            <h1>Upload a Recipe</h1>
            <h4>Copy and paste a recipe url below to extract the ingredients and instructions. </h4>
            <Search placeholder="Recipe URL..." />
        </div> 
    );
}
export default Upload;