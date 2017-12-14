import React, { Component } from 'react';


import Team from './Team/Team';
import classes from '../Match/Match.css';







class Match extends Component {

  render() {

    console.log(this.props);

    return (

      // <div class="row">

      //     <div class="col-xs-2"><Team team= {this.props.home}/> </div>
      //     <div class="col-xs-2">X</div>
      //     <div class="col-xs-2"><Team team= {this.props.away} /> </div>

      //  </div>
      <form class="form-inline">
        <div class="form-group">
          <label for="brazil">BRAZIL</label>
          <input type="text" id="brazil" class="form-control form-control-sm small-input" />
          X
 <input type="text" id="germany" class="form-control form-control-sm small-input" />
          <label for="germany">GERMANY</label>
        </div>
      </form>
      // <div class="panel panel-default col-sm-12">
      //   <div class='panel panel-heading text-center'>Jogo {this.props.number.match}</div>
      //   <div class='panel-body'>
      //     {/* <ul class="list-group">
      //       <li class="list-group-item text-center">Finished</li>
      //       <li class="list-group-item text-center">2015-9-23</li>
      //     </ul> */}
      //     <div class='col-sm-4 text-center'>
      //       <ul class={classes.listadejogosconteudo}>

      //         <Team team={this.props.home} />
      //       </ul>
      //     </div>
      //     <div class="col-sm-4 text-center">
      //       <ul class="list-group">
      //         <li class="list-group-item">  

      //          <input id="textinput" class = "form-control form-control-sm small-input"  maxlength="1" name="textinput" size = "1" type="tel" class="form-control input-md"></input> X   <input id="textinput" name="textinput" size = "1" type="number" class="form-control input-md"></input>
      //         </li>


      //       </ul>
      //      </div>

      //       <div class='col-sm-4 text-center'>
      //         <ul class="list-group">
      //           <Team team={this.props.away} />
      //         </ul>
      //       </div>


      //     </div>
      //   </div>



    )
  }
}



export default Match;