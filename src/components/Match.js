import React, { Component } from 'react';
import Team from './Team';

import WorldCup from '../world-cup';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableCell,
  TableHead

} from 'material-ui/Table';

import TextField from 'material-ui/TextField';



class Match extends Component {


  componentWillMount() {

    console.log('Vai montar o Match');

  }




  render() {
    const { match } = this.props;
    const homeTeam = WorldCup.teams[this.props.match.home_team -1];
    const awayTeam = WorldCup.teams[this.props.match.away_team -1];
    const styles = {
      floatingActionButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
      },
  
      columns: {
        home: {
          width: '20%',
          textAlign: 'left'
        },
        home_score: {
          width: '20%',
          textAlign: 'right'
          
          
        },
        versus: {
          width: '20%',
          textAlign: 'center'
        },
        away: {
          width: '20%',
          textAlign: 'right'
  
        },
        away_score: {
          width: '20%',
          textAlign: 'center'
        }
      }
    };
  

    return (

      <TableRow key={match.id}>
      
      <TableCell style={styles.columns.home}><Team team={WorldCup.teams[match.home_team - 1]} home={true} /></TableCell>
      <TableCell style={styles.columns.home_score}>
        <TextField
          defaultValue={0}
          fullWidth={true}
          type="number"
          inputStyle={{ textAlign: 'right' }}

        /></TableCell>
      <TableCell style={styles.columns.versus}>X</TableCell>

      <TableCell style={styles.columns.home_score}>
        <TextField
          defaultValue={0}
          fullWidth={true}
          type="number"
          inputStyle={{ textAlign: 'center' }}
        /></TableCell>
      <TableCell style={styles.columns.away}><Team team={WorldCup.teams[match.away_team - 1]} home={false} /></TableCell>

    </TableRow>
        



        
     
        /* <TableCell style={styles.columns.home_score}>
          <TextField
            defaultValue={0}
            fullWidth={true}
            type="number"
            inputStyle={{ textAlign: 'center' }}

          /></TableCell>
        <TableCell style={styles.columns.versus}>X</TableCell>

        <TableCell style={styles.columns.home_score}>
          <TextField
            defaultValue={0}
            fullWidth={true}
            type="number"
            inputStyle={{ textAlign: 'center' }}
          /></TableCell>
        <TableCell style={styles.columns.away}><Team team={WorldCup.teams[match.away_team - 1]} home={false} /></TableCell> */

    

    );
  }
}



export default Match;

