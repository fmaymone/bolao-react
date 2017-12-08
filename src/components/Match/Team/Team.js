import React, { Component }  from 'react';
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
  <div>
    <FlagIcon code={props.code} size={props.size} />
  </div>

  const appProps = { code: isoFlagName, size: size };

  flag = <Flag {...appProps} />;
  console.log("Times sao" , {name} , this.props.team.home);
  if(this.props.team.home){
    team = (
      <div> {reducedName}
        <div> {flag} </div>

      </div>

  );
  }else{
    team = (
      <div> 
        <div> {flag} </div>
        {reducedName}
      </div>
    );

  }

  return team;

 


};
}

// Team.propTypes = {

//   isoFlagName: PropTypes.string.isRequired


// }
export default Team;