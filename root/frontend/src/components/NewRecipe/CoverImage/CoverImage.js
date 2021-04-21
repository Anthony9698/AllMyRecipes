import React from 'react';
import classes from './coverImage.module.css';

const CoverImage = props => {
    return (
        <div className={classes.CoverImage}>
            <img src="http://placehold.it/225x150.jpg" />
        </div>
    );
}
export default CoverImage;