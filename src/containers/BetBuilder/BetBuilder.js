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

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});


const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}


class BetBuilder extends Component {



    constructor(props) {
        super(props);
        this.state = { matches: [] };
    }

    componentWillMount() {

        axios.get('http://localhost:3000/matches/')
            .then(response => {
                console.log("Dentro do didmount");
                this.setState({ matches: response.data });
                console.log(this.state.matches);
                console.log("Dentro do didmount");
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
            /*<div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell numeric>Calories</TableCell>
                                    <TableCell numeric>Fat (g)</TableCell>
                                    <TableCell numeric>Carbs (g)</TableCell>
                                    <TableCell numeric>Protein (g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {matches}

                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>


            </div>*/
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell numeric>Calories</TableCell>
                            <TableCell numeric>Fat (g)</TableCell>
                            <TableCell numeric>Carbs (g)</TableCell>
                            <TableCell numeric>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell>{n.name}</TableCell>
                                    <TableCell numeric>{n.calories}</TableCell>
                                    <TableCell numeric>{n.fat}</TableCell>
                                    <TableCell numeric>{n.carbs}</TableCell>
                                    <TableCell numeric>{n.protein}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }

}





export default withStyles(styles)(BetBuilder);