import React from 'react';

import classes from '../Toolbar/Toolbar.css';
import Logo from '../../Layouts/Logo/Logo';
import NavigationItens from '../NavigationItens/NavigationItens';

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div>Menu</div>
            <Logo />
        <nav>
            <NavigationItens />
        </nav>


    </header>

)

export default toolbar;