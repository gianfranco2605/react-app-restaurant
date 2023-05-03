import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css'

const Header = props => {
    return (
        // REMEMBER IMPORT FRAGMENT TO USE IT
        <Fragment>
            <header className={classes.header}>
                <h1>GianfrancoMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            {/* USING THIS ['main-image'] CAUSE THE - */}
            <div className={classes['main-image']}>
                <img src={mealsImage}  alt='A table of food' />
            </div>
            
        </Fragment>
    );
};


export default Header;