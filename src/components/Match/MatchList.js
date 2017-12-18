import React, { Component } from 'react';


import Team from './Team/Team';
import Match from './Match/Match';
class MatchList extends Component{

    render() {
		var matches = this.props.matches.map(match =>
			<Match key={match._links.self.href} match={match}/>
		);
		return (
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
		)
	}


}