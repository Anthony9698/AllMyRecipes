import React from 'react';
import classes from './menu.module.css';

const Menu = props => {
    let attachedStyles = [classes.Menu, classes.Close].join(' ');
    if (props.isOpen) {
        attachedStyles = [classes.Menu, classes.Open].join(' ');
    }

    return (
        <div className={attachedStyles}>
            <ul>
                <li onClick={() => props.clicked('Breakfast')}>Breakfast</li>
                <li onClick={() => props.clicked('Lunch')}>Lunch</li>
                <li onClick={() => props.clicked('Dinner')}>Dinner</li>
                <li onClick={() => props.clicked('Snack')}>Snack</li>
            </ul>
        </div>
    );
}
export default Menu;