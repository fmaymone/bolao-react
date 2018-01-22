import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../components/Hoc/Auxiliar'
import Team from '../../components/Match/Team/Team';
import Match from '../../components/Match/Match';
import classes from './BetBuilder.css';

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
           <h1>Olar {this.props.data.groups.a.matches[0].date} </h1>
        );
    }
}

const mapStateToProps = state => {
    return {

        data: state.data,
        ctr:  state.ctr.counter
       
    }
};



export default connect(mapStateToProps)(BetBuilder);

