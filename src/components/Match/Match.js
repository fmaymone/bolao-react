import React, { Component } from 'react';


import WorldCup from '../../world-cup';


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

import TextField from 'material-ui/TextField';



class Match extends Component {


  componentWillMount() {

    console.log('Vai montar o Match');

  }




  render() {
    const { match } = this.props;
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
        textAlign: 'center'
        
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
        width: '20%'
      }
    }
  };

    return (

<h1>OI Match {this.props.match.name}</h1>
        
     
        /* <TableRowColumn style={styles.columns.home_score}>
          <TextField
            defaultValue={0}
            fullWidth={true}
            type="number"
            inputStyle={{ textAlign: 'center' }}

          /></TableRowColumn>
        <TableRowColumn style={styles.columns.versus}>X</TableRowColumn>

        <TableRowColumn style={styles.columns.home_score}>
          <TextField
            defaultValue={0}
            fullWidth={true}
            type="number"
            inputStyle={{ textAlign: 'center' }}
          /></TableRowColumn>
        <TableRowColumn style={styles.columns.away}><Team team={WorldCup.teams[match.away_team - 1]} home={false} /></TableRowColumn> */

    

    );
  }
}



export default Match;

