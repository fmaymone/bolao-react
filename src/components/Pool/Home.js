import React, { Component } from "react";
import { Switch, Route } from "react-router";
import All from './All';
import Detail from './Detail';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Isso é Pool</h2>
        <Switch>
          <Route exact path="/pool" component={All} />
          <Route path="/pool/:number" component={Detail} />
        </Switch>
      </div>
    );
  }
}

export default Home;
