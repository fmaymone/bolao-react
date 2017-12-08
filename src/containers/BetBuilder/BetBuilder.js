import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Team from '../../components/Match/Team/Team';
import Match from '../../components/Match/Match';

class BetBuilder extends Component {
    
    // constructor(props){
    //     super(props);
    //     this.state = {};

    // }

    state = {

        matches: [
            {match: 1, "home": {isoFlagName: 'it',  name: 'Italia', reducedName: 'ITA', home: true},
                    "away" : {isoFlagName: 'br',  name: 'Brasil', reducedName: 'BRA', home: false} 
                    },
            {match: 2, home: {isoFlagName: 'fr',  name: 'France', reducedName: 'FRA', home: true},
                    away: {isoFlagName: 'ad',  name: 'Andorra', reducedName: 'AND', home:false}}

                ]


    }
    render() {
      
        let matches = null;
    
        console.log(this.state.matches);

        return (
            <Aux>
                <div>Bet</div>
               
                        <div>
                      
                        {this.state.matches.map((match, index) => {
                      
                        return <Match
                                number={match.number} 
                                home={match.home}
                                away={match.away}
                            />
                        })}
                        </div>
                    );
                     
                <div>Bet Controls</div>
            </Aux>
        );
    }
}

export default BetBuilder;