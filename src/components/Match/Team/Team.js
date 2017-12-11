import React, { Component } from 'react';
import classes from './Team.css';
import FlagIcon from '../../FlagIcon/FlagIcon';
import PropTypes from 'prop-types';


class Team extends Component {
  render() {

    let name = this.props.team.name;
    let reducedName = this.props.team.reducedName;
    let isoFlagName = this.props.team.isoFlagName;
    let flag = null;
    let size = '2x';
    let team = null;



    const Flag = (props = {}) =>

      <FlagIcon code={props.code} size={props.size} />


    const appProps = { code: isoFlagName, size: size };

    flag = <Flag {...appProps} />;

    if (this.props.team.home) {
      team = (
        <div>
          <p>{reducedName}  {flag} </p>
        </div>


      )
    } else {
      team = (
        <div>
          <p>{flag}   {reducedName}</p>
        </div>
      )

    }

    return team;




  };
}

// Team.propTypes = {

//   isoFlagName: PropTypes.string.isRequired


// }
export default Team;