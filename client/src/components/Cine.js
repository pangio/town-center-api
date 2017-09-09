import React, { Component } from 'react';

class Cine extends Component {
  render() {
    return (
        <h2>Bienvenido al Cine {this.props.params.id}</h2>
    );
  }
}

export default Cine;
