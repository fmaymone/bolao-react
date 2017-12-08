import React, { Component } from 'react';
import Layout from './components/Layouts/Layout';
import BetBuilder from './containers/BetBuilder/BetBuilder'

import './App.css';

class App extends Component {
  render() {
    return (
     <Layout>
       <BetBuilder>
     
       </BetBuilder>
     </Layout>
    );
  }
}



export default App;
