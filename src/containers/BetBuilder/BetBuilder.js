import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../components/Hoc/Auxiliar'
import Team from '../../components/Match/Team/Team';
import Match from '../../components/Match/Match';
import classes from './BetBuilder.css';
import Group from '../Group';

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

    render () {
        console.log('BetBuilder');
        console.log(this.props.data);
        console.log('BetBuilder');
        return (
         <Group />
        );
    }
}





export default BetBuilder;

