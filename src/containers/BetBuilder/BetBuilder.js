import React, { Component } from 'react';
import { connect } from 'react-redux';

import Team from '../../components/Team';
import Match from '../../components/Match';
import classes from './BetBuilder.css';
import Group from '../../components/Group';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import WorldCup from '../../world-cup';

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


import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class BetBuilder extends Component {

    render () {
        console.log('BetBuilder');
        console.log(this.props.data);
        console.log('BetBuilder');
        return (
        <div className={styles.root}>
            
                <Grid item xs={3}>
                    <Paper className={styles.paper}>
                        <Button raised color="primary" className={classes.button}>Ant</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles.paper}>
                        <Button raised color="primary" className={classes.button}>Prox</Button>
                    </Paper>
                </Grid>

            <Grid item xs={6}>
                <Paper className={styles.paper}><Group /></Paper>
            </Grid>

            <Grid item xs={3}>
                    <Paper className={styles.paper}>
                        <Button raised color="primary" className={classes.button}>Enviar</Button>
                    </Paper>
                </Grid>
        </div>
        );
    }
}





export default BetBuilder;

