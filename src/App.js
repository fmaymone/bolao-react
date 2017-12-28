import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
//import Drawer from 'material-ui/Drawer';
import BetBuilder from './containers/BetBuilder/BetBuilder';
import './App.css';

import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


injectTapEventPlugin();
class App extends Component {
  render() {
   
    return (


      <div >
        
        
        
        
        <AppBar position="static">
        <Toolbar>
          <IconButton  color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" >
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
        <BetBuilder></BetBuilder>

      </div>

    );
  }
}

export default App;