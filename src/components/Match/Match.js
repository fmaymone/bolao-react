import React, { Component } from 'react';


import Team from './Team/Team';
import classes from '../Match/Match.css';





class Match extends Component {
  
  render() {
    

   
    return (
      
      <div class="row">
          
          <div class="col-xs-2"><Team team= {this.props.home}/> </div>
          <div class="col-xs-2">X</div>
          <div class="col-xs-2"><Team team= {this.props.away} /> </div>
           
       </div>
     
      
        

    )
  }
}



export default Match;