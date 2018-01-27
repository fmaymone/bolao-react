import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h1>Detail Pool {this.props.match.params.number} </h1> )
    }
}
 
export default Detail;