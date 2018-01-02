import React, { Component } from 'react';

import Aux from '../../components/Hoc/Auxiliar'
import Team from '../../components/Match/Team/Team';
import Match from '../../components/Match/Match';
import classes from './BetBuilder.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/SvgIcon';
import CommunicationChatBubble from 'material-ui/SvgIcon';
import { indigo500 } from 'material-ui/colors';
import CommunicationEmail from 'material-ui/SvgIcon';
import 'typeface-roboto';
import Table, {
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableCell,
    TableHead
} from 'material-ui/Table';


class BetBuilder extends Component {



    constructor(props) {
        super(props);
        this.state = { matches: [] };
    }

    componentWillMount() {

        axios.get('http://localhost:3000/matches/')
            .then(response => {
             
                this.setState({ matches: response.data });
                
            });


    }

    state = {
        matches: []

    }


    render() {
        
        var matches = this.state.matches.map(match =>
           
                    <TableRow>
                        <TableCell>
                            <Match key={match.id} match={match} />
                        </TableCell>
                    </TableRow>
               
        );
        
        return (
            <Table>
                <TableBody>
                    {matches}
                </TableBody>
             </Table>
            
        )
    }

}





export default BetBuilder;