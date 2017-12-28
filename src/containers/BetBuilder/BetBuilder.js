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
            <Grid item xs={6}>
            <Match key={match.id} match={match} />
            </Grid>
        );
        /*return (
            
                <table>
                    <tbody>
                        
                    </tbody>
                </table>
            
        )*/
        return(
        <div className={classes.root}>
            <Grid container spacing={24}>
                
                   {matches}

                
                
            </Grid>
        </div>
        )
    }

}





export default BetBuilder;