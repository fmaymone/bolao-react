import Home from "./Home";
import Pool from "../components/Pool/Home";
import LoginPage from '../containers/LoginPage'
import React, { Component } from 'react';
import { Route, Switch } from "react-router";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/pool' component={Pool}/>
      <Route path='/login' component={LoginPage}/>
    </Switch>
  </main>
)

export default Main;