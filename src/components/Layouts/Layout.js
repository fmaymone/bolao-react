import React from 'react';

import Aux from '../Hoc/Auxiliar';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';



const layout = ( props ) => (

    
        <main className={classes.Content}>
            {props.children}
        </main>
    

);

export default layout;