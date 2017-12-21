import React, { Component } from 'react';

import Aux from '../../components/Hoc/Auxiliar'
import Team from '../../components/Match/Team/Team';
import Match from '../../components/Match/Match';
import classes from './BetBuilder.css';
import axios from 'axios';


class BetBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = { matches: [] };
    }

    componentWillMount() {

        axios.get('http://localhost:8080/api/matches/')
            .then(response => {
                console.log("Dentro do didmount");
                this.setState({ matches: response.data._embedded.matches });
                console.log(this.state.matches);
                console.log("Dentro do didmount");
            });


    }

    state = {
        matches: []

    }
    render() {

        var matches = this.state.matches.map(match =>
            <Match key={match._links.self.href} match={match} />
        );
        return (
            
                <table>
                    <tbody>
                        {matches}
                    </tbody>
                </table>
            
        )
    }

}





export default BetBuilder;