import React, { Component } from 'react';
import Team from './Team/Team';
import classes from '../Match/Match.css';
import axios from 'axios';


class Match extends Component {
  state = {

    away: [],
    home: []

  }

  componentWillMount() {

    var awayUrl = this.props.match._links.away.href;
    var homeUrl = this.props.match._links.home.href;


    axios.get(awayUrl)
      .then(response => {
        console.log("Dentro do away");
        console.log(response.data._embedded);
        this.setState({ away: response.data });
        console.log(this.state.away);
        console.log("Dentro do away");
      })
      .catch((error) => {
        console.log("error", error)
      });

    axios.get(homeUrl)
      .then(response => {
        console.log("Dentro do home");
        this.setState({ home: response.data });
        console.log(this.state.home);
        console.log("Dentro do home");
      });

    console.log("Time Away");

  }

  render() {

    return (

      // <div class="row">

      // <div class="col-xs-2"><Team team= {this.props.home}/> </div>
      // <div class="col-xs-2">X</div>
      // <div class="col-xs-2"><Team team= {this.props.away} /> </div>

      // </div>

      <div className="panel panel-default col-sm-12">
        <div className='panel panel-heading text-center'>Jogo {this.props.match.num}</div>
        <div className='panel-body'>
          {/* <ul class="list-group">
<li class="list-group-item text-center">Finished</li>
<li class="list-group-item text-center">2015-9-23</li>
</ul> */}
          <div class='col-sm-4 text-center'>
            <ul class={classes.listadejogosconteudo}>

              {<Team team={this.state.home} />}
            </ul>
          </div>
          <div class="col-sm-4 text-center">
            <ul class="list-group">
              <li class="list-group-item">

                <input id="textinput" class="form-control form-control-sm small-input" maxlength="1" name="textinput" size="1" type="tel" class="form-control input-md"></input> X <input id="textinput" name="textinput" size="1" type="number" class="form-control input-md"></input>
              </li>


            </ul>
          </div>

          <div class='col-sm-4 text-center'>
            <ul class="list-group">
              {<Team team={this.state.away} />}
            </ul>
          </div>


        </div>
      </div>



    )
  }
}



export default Match;
