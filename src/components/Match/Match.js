import React, { Component } from 'react';


import Team from './Team/Team';
import classes from '../Match/Match.css';





class Match extends Component {
  
  render() {
    

   
    return (
      <div class="container">
      <div class="row">
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
        <div className={classes.Match}>
          <Team team= {this.props.home}  /> X 
          <Team team= {this.props.away}  />

        </div>
        </div>
        <div class="col-sm">
          One of three columns
        </div>
      </div>
    </div>
     

        
      
    );
  }
}



export default Match;