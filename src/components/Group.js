import React, { Component } from 'react';
import { connect } from 'react-redux';
import Match from '../components/Match';
import WorldCup from '../world-cup';

import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700
      
      
    },
  });

class Group extends Component {
    state = {  };
    render() {
        let match={
            "name": 1,
            "type": "group",
            "home_team": 1,
            "away_team": 2,
            "home_result": null,
            "away_result": null,
            "date": "2018-06-14T18:00:00+03:00",
            "stadium": 1,
            "channels": [],
            "finished": false
        }
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        return (
           
     
        
            <Table className={styles.table}>
                <TableBody className={styles.table}>
                    {this.props.group.matches.map(n => {
                        return (
                            <Match match={n}/>
                        );
                    })}
                </TableBody>
            </Table>
        
        );
    }
}

const mapStateToProps = state => {
    return {
        
        data: state.data,
        ctr:  state.ctr.counter
       
    }
};



export default Group;