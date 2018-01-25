import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
//import Drawer from 'material-ui/Drawer';
import BetBuilder from './containers/BetBuilder';
import './App.css';
import Button from "material-ui/Button";
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import 'typeface-roboto'
import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import { withTheme } from 'material-ui/styles';
import Demo from './demo';
import { Route, Link, Router } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import Header from './components/Layout/Header';
import Home from './containers/Home';


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});


injectTapEventPlugin();

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {


  render() {


    return (

      <MuiThemeProvider theme={theme}>
       <Header />
          <Home />
      </MuiThemeProvider>

        );
  }
}

export default withTheme()(App);