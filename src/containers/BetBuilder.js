import React, { Component } from 'react';
import { connect } from 'react-redux';

import Team from '../components/Team';
import Match from '../components/Match';

import Group from '../components/Group';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import WorldCup from '../world-cup';

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

    state = {
        activeGroup: [],
        groups: []

    };

    componentWillMount(){
        this.setState({activeGroup: WorldCup.groups.a});
        this.setState({groups: WorldCup.groups});
        console.log(this.state);

    }

    handlerNextGroup(){

        console.log('====================================');
        console.log('nextGroup');
        this.setState({activeGroup: WorldCup.groups.b});
        console.log('====================================');
    }

    handlerPrevGroup(){

        console.log('====================================');
        console.log('prevGroup');
        console.log('====================================');
    }

    render () {
    console.log('=============Groups=======================');
    console.log(this.state.groups);
    console.log('====================================');
        return (
        <div className={styles.root}>
            
                <Grid item xs={3}>
                    <Paper className={styles.paper}>
                        <Button raised color="secundary" className={styles.button} onClick={() => this.handlerPrevGroup()}>Ant</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={styles.paper}>
                        <Button raised color="secundary" className={styles.button}  onClick={() => this.handlerNextGroup()} >Prox</Button>
                    </Paper>
                </Grid>

            <Grid item xs={6}>
                <Paper className={styles.paper}><Group group={this.state.activeGroup}/></Paper>
            </Grid>

            <Grid item xs={3}>
                    <Paper className={styles.paper}>
                        <Button raised color="secundary" className={styles.button}>Enviar</Button>
                    </Paper>
                </Grid>
        </div>
        );
    }
}





export default BetBuilder;

