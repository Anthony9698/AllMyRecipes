import React from 'react';
import classes from './coverImage.module.css';

const CoverImage = props => {
    return (
        <div className={classes.CoverImage}>
            <img alt="recipe" src="http://placehold.it/225x150.jpg" />
        </div>
    );
}
export default CoverImage;