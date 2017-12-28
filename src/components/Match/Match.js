import React, { Component } from 'react';
import Team from './Team/Team';
import classes from '../Match/Match.css';
import axios from 'axios';
import Grid from 'material-ui/Grid';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableCell,
  TableHead

} from 'material-ui/Table';


class Match extends Component {
  state = {

    away: [],
    home: []

  }

  componentWillMount() {

    var awayUrl = "http://localhost:3000/teams/" +this.props.match.away_team ;
    var homeUrl = "http://localhost:3000/teams/" +this.props.match.home_team ;
    

    axios.get(awayUrl)
      .then(response => {
        console.log("Dentro do away");
        console.log(response.data);
        this.setState({ away: response.data });
        console.log(this.state.away);
        console.log("Dentro do away");
      })
      .catch((error) => {
        console.log("error", error)
      });

    axios.get(homeUrl)
      .then(response => {
        console.log("Dentro do home");
        this.setState({ home: response.data });
        console.log(this.state.home);
        console.log("Dentro do home");
      });

    console.log("Time Away");

  }

  render() {

    return (

    <div>
      <TableCell><Team team= {this.state.home}/> </TableCell>
      <TableCell>X </TableCell>
      <TableCell><Team team= {this.state.away}/> </TableCell>
      
    </div>

    )
  }
}



export default Match;
