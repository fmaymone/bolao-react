import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Team from '../../components/Match/Team/Team';
import Match from '../../components/Match/Match';
import classes from './BetBuilder.css';
import axios from 'axios';


class BetBuilder extends Component {

    constructor(props) {
		super(props);
		this.state = {matches: []};
	}

    componentDidMount() {

     
        axios.get('http://localhost:8080/api/matches/')
            .then(response => {
                console.log("Dentro do didmount");
                this.setState({ matches: response.data._embedded.matches });
                console.log(this.state.matches);
                console.log("Dentro do didmount");
            });

    axios.get("http://localhost:8080/api/matches/4/away")
      .then(response => {
        console.log("Dentro do away");
        this.setState({ away: response.data._embedded });
        console.log(this.state.away);
        console.log("Dentro do away");
      })
      .catch((error) => {
        console.log("error",error)
      });
            
            
    }

    state = {
      
        matches: []

    }
    render() {

        var matches = this.state.matches.map(match =>
			<Match key={match._links.self.href} match={match}/>
        );
        
        console.log("AXIOS");
        console.log(axios);
        console.log("AXIOS");

 



    
        
        return (
            <Aux>
               <table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{matches}
				</tbody>
			</table>
            </Aux>
        )
            
        }

       
        
    }





export default BetBuilder;

