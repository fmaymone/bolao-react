import React, { Component } from 'react';
import { connect } from 'react-redux';
import Match from '../components/Match/Match';
import WorldCup from '../world-cup';
import Table from 'material-ui/Table/Table';
import TableBody from 'material-ui/Table/TableBody';

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
        console.log(WorldCup);
        console.log('====================================');
        return (
           
           <Table>
               <TableBody>
            {WorldCup.groups.a.matches.map(match =>
                    <div>   
                        <Match match = {match} />
                    </div>
                )}
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